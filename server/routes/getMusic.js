const mongoose = require('mongoose')

const saveToCloudinary = require('../utils/cloudirary')
const Song = mongoose.model('Song')

function getOptions(page,limit){
    return {
        page: page || 1,
        limit: limit || 30,
        sort: { createdAt: -1 },
    }
    
}

//get music route
module.exports = (app) => {
//**** READ  ****
    //serve all music on database
    app.get('/api/music/all',async (req, res) => {
        //req from browser should look like this: /api/music/all?page=2&limit=1
        const {page, limit} = req.query
        const options = getOptions(page,limit)
        try{

            //pagination: takes query and then options
            const Data = await Song.paginate({},options)
            res.send(Data)
        }catch(err){
            res.send(err)
        }
       
    })
    //by category
    app.get('/api/music/:category',async (req, res) => {
        const category = req.params.category
        const {page, limit} = req.query
        const options = getOptions(page,limit)

        try{
            //regex for case insentive search
            const Data = await Song.paginate({category: { $regex : new RegExp(category, "i") }}, options)
            res.send(Data)
        }catch(err){
            res.send(err)
        }
       
    })

    //serve by Song 
    app.get('/api/music/:artist/:title',async (req, res) => {
        let {title, artist} = req.params
        try{
            //case insensitive search
            const Data = await Song.find({title:{ $regex : new RegExp(title, "i") }, artist: { $regex : new RegExp(artist, "i") }})
            res.send(Data)
        }catch(err){
            res.send(err)
        }
       
    })

//**** CREATE ******  
    app.post('/api/music/new', async (req, res) => {
        const now = new Date();
        const year = now.getFullYear()
        const mes = now.getMonth()
        const dir = `${year}/${mes}`

        const file = req.files.file
        const audio = req.files.url

        let {title, artist, album, category} = req.body
        let img = ''
        let url = ''
        const name = `${artist} - ${title}`

        try{
            const pa = `/build/uploads/${new Date().getMilliseconds() + file.name}`
            file.mv(`.${pa}`)
            const audioPa = `/build/uploads/${audio.name}`
            await audio.mv(`.${audioPa}`)
            const savedImage = await saveToCloudinary(`.${pa}`,{folder: `pxmusic/images/${dir}`, use_filename: true})
            const savedAudio = await saveToCloudinary(`.${audioPa}`, {resource_type: "video", folder: `pxmusic/music/${dir}`, use_filename: true})
            img = savedImage.url
            url = savedAudio.url
        }catch(err){
            return res.send({error:'something happened during cloudinary  upload'})
        }
       
       
        try{
            const Songs = await Song.findOne({title, artist})
            if(!Songs){
                //Song Doesnt Exist. creates new Song and the song 
                const newSong = await new Song({
                    name, title, artist, album, url, category, img
                }).save()
                return res.status(201).send(newSong)
            }else{
                //SONG EXISTS ALREADy
                res.status(403).send({error:"Already Exist"})
            }
        }catch(err){
            res.send([{error: 'hey Wilfred from post'},err.message])
        }
    })

    

// **** UPDATE ****
    app.patch('/api/song/:id', async (req, res) => {
        try{
            const song = await Song.findOneAndUpdate({_id: req.params.id},{
                ...req.body
            })
            res.status(202).send(song)
        }catch(err){
            res.status(404).send(err)
        }
    })


//  ****** DELETE ******* //
    app.delete('/api/song/:id', async (req, res) => {
        const id = req.params.id
        try{
            const Songs = await Song.findOneAndDelete({_id: id})
            Songs.save()
            res.status(202).send(Songs)       
        }catch(err){
            res.status(404).send(err.message)
        }
    })
}

