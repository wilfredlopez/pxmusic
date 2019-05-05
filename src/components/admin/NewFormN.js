import React, {Fragment, useState} from 'react'
import axios from 'axios'

const NewFormN = () => {
    const [file, setFile] = useState()
    const [filename, setFileName] =  useState('Elige Imagen')
    const [title, setTitle] = useState()
    const [artist, setArtist] = useState()
    const [album, setAlbum] = useState()
    const [url, setUrl] = useState()
    const [urlName, setUrlName] = useState('Elige Audio')
    const [category, setCategory] = useState()
    const [LOADING, SET_LOADING] = useState(false)
    const [postError, setPostError] = useState('')

    //error handlers
    const [titleError, setTitleError] = useState()
    const [artistError, setArtistError] = useState()
    const [categoryError, setCategoryError] = useState()
    const [urlError, setUrlError] = useState()
    const [fileError, setFileError] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()


                
        if(!title){
            return setTitleError('A Song title must be provided')
        }

        if(!artist){
            return setArtistError('Artist Name must be provided')
        }

        if(!category){
            return setCategoryError('Song Category or Genre is required')
        }

        if(!file){
            console.log('theres no file')
           return  setFileError('Choose an image. this is required.')
        }

        if(!url){
            return setUrlError('Choose an audio file. This is required. ')
        }


        const formData = new FormData()

        formData.append('file', file)
        formData.append('title', title)
        formData.append('artist', artist)
        formData.append('album', album)
        formData.append('url', url)
        formData.append('category', category)

        const options =  {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }

        try{
            SET_LOADING(true)

            let URL = '/api/music/new'
           // URL = 'https://pxmusic.herokuapp.com/api/music/new'

            const res = await axios.post(URL,formData, options)
            console.log(res)
            clearForm()
            
            }catch(err){
                console.log('there was an error', err)
                setPostError(err)
                SET_LOADING(false)
            }
            SET_LOADING(false)
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    const onAudioFileChange = (e) => {
        setUrl(e.target.files[0])
        setUrlName(e.target.files[0].name)
    }

    const clearForm = ()=> {
        setFile([])
        setFileName('Elige Image')
        setUrl([])
        setUrlName("Elige Audio")
        setTitle('')
        setArtist('')
        setAlbum('')
        setCategory('')
    }

    const handleChange = (e)=> {
        const {name, value} = e.target
        switch(name){
            case "title":
                if(value === ''){
                    setTitleError({message:'Please enter a song title'})
                }
                return setTitle(value)
            case "artist":
            if(value === ''){
                setArtistError('Please enter a Artist name')
            }
                return setArtist(value)
            case "album":
                return setAlbum(value)
            case "category":
                if(value === ''){
                    setCategoryError('Please specify  a category')
                }
                return setCategory(value)
            default: 
                return 
        }
    }

    const DisplayError = (error) =>{
        return (
            <Fragment>
            {error && <small className="alert alert-danger d-flex mt-2">{error}</small>}
            </Fragment>
        )
    }

        return (
            <Fragment>
            {LOADING && <img  src={ require('../IMG/glow.gif') } className="loader" alt="loading..."/>}
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="song_title">*Song Title</label>
                <input name="title" className="form-control"  id="song_title" type="text" value={title} onChange={handleChange}/>
                {DisplayError(titleError)}
            </div>
            <div className="form-group">
            <label htmlFor="song_artist">*Artist</label>
            <input name="artist" className="form-control" id="song_artist" type="text" value={artist} onChange={handleChange}/>
            {DisplayError(artistError)}
            </div>
            <div className="form-group">
                <label htmlFor="song_album">Album</label>
                <input name="album" className="form-control" id="song_album" type="text" value={album} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="song_category">*Category</label>
                <input name="category" className="form-control" id="song_category" type="textarea" value={category} onChange={handleChange}/>
                {DisplayError(categoryError)}
            </div>
            <div className="custom-file form-group">
                <input 
                    type="file" 
                    className="custom-file-input form-control" 
                    id="img" 
                    name="file"
                    onChange={onFileChange}
                />
                <label className="custom-file-label" htmlFor="file">*{filename}</label>
                {DisplayError(fileError)}
            </div>
            <div className="custom-file form-group mt-3">
            <input 
                type="file" 
                className="custom-file-input form-control" 
                id="url" 
                name="file"
                onChange={onAudioFileChange}
            />
            <label className="custom-file-label" htmlFor="file">*{urlName}</label>
            {DisplayError(urlError)}
        </div>
            <div className="row my-2 text-right ">
            <div className="col-12 d-flex">
                <small>*required fields</small>
                </div>
            <div className="col-12 mt-2">
                <i className="btn btn-info text-right mb-3 float-left" onClick={clearForm} role="button">
                <span className=""> Clear <i className="far fa-trash-alt"> </i></span>
                </i>
                <button type="submit" className="btn btn-success text-right mb-3">
                    <i className="">Upload </i><i className="fas fa-upload"></i>
                </button>
                
            </div>
            </div>
            {postError && <div className="row"><div className="col text-center"><i className="alert alert-danger ">{postError.message}</i></div></div>}
            </form>
            <div className="float-right">

            </div>
            </Fragment>
        )
}

export default NewFormN