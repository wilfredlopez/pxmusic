import React, {Fragment, useState} from 'react'
import axios from 'axios'

const NewFormN = () => {
    const [file, setFile] = useState()
    const [filename, setFileName] =  useState('Imagen')
    const [title, setTitle] = useState()
    const [artist, setArtist] = useState()
    const [album, setAlbum] = useState()
    const [url, setUrl] = useState()
    const [category, setCategory] = useState()


    const onSubmit = async (e) => {
        e.preventDefault()
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
            const res = await axios.post('/api/music/new',formData, options)
            console.log(res)
            clearForm()
            }catch(err){
                console.log('there was an error', err)
            }
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const clearForm = ()=> {
        setFile([])
        setTitle('')
        setArtist('')
        setAlbum('')
        setUrl('')
        setCategory('')
    }

    const handleChange = (e)=> {
        const {name, value} = e.target
        switch(name){
            case "title":
                return setTitle(value)
            case "artist":
                return setArtist(value)
            case "album":
                return setAlbum(value)
            case "url":
                return setUrl(value)
            case "category":
                return setCategory(value)
            default: 
                return 
        }
    }

        return (
            <Fragment>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="song_title">*Song Title</label>
                <input name="title" className="form-control" placeholder="Song itle" id="song_title" type="text" value={title} onChange={handleChange}/>
            </div>
            <div className="form-group">
            <label htmlFor="song_artist">*Artist</label>
            <input name="artist" className="form-control" placeholder="Artist" id="song_artist" type="text" value={artist} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="song_album">Album</label>
                <input name="album" className="form-control" placeholder="album" id="song_album" type="text" value={album} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="song_url">*Mp3 Url</label>
                <input name="url" className="form-control" placeholder="mp3 Url" id="song_url" type="textarea" value={url} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="song_category">*Category</label>
                <input name="category" className="form-control" placeholder="Category" id="song_category" type="textarea" value={category} onChange={handleChange}/>
            </div>
            <div className="custom-file">
                <input 
                    type="file" 
                    className="custom-file-input" 
                    id="img" 
                    name="file"
                    onChange={onFileChange}
                />
                <label className="custom-file-label" htmlFor="file">{filename}</label>
            </div>
            <div className="row my-2 text-right ">
            <div className="col-12 d-flex">
                <small>*required fields</small>
                </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success text-right mb-3">
                    <i className="">Upload</i>
                </button>
            
            </div>
            </div>

            </form>
            </Fragment>
        )
}

export default NewFormN