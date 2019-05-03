import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

let url = 'https://pxmusic.herokuapp.com'
    if(process.env.NODE_ENV === "development"){
        url = 'http://localhost:3000'
    }


export const fetchAllMusic = async () => {
    const res = await axios.get(`${url}/api/music/all/`)
    console.log(res)
    return res.data
   
}

export function loadandRenderMusic(array){
     return array.map((song) => {
         return (             
             <div className="card mb-4" key={song._id} id={song._id}>
                 <div className="card-header text-center">
                     <img src={song.img} className="img-fluid" alt={song.name}/>
                 </div>
             <div className="card-body">
                 <h5 className="card-title  text-center">
                 <figure>
                 <figcaption>{song.name}</figcaption>
                 </figure>
                 <audio controls preload="none">
                     <source src={song.url}type="audio/mpeg"/>
                 Your browser does not support the audio element.
                 </audio>
                 </h5>
                 <div className="row ">
                     <div className="col">
                         <p className="card-text text-left"><i className="font-weight-bold">Genero:</i>
                         <a href={"/music/"+song.category.toLowerCase()}> {song.category}</a></p>
                     </div>
                     <div className="col">
                     <p className="card-text text-right"><i className="font-weight-bold">Downloads:</i> {song.downloads}</p>
                 </div>
                 </div> 
             </div>
             </div>
             )
     })
     
 }

 export const pagination = (array) => {
    const decode = decodeURI(window.location.search).replace('?', '').split('&')
    .map(param => param.split('='))
    .reduce((values, [ key, value ]) => {
            values[ key ] = value
            return values
        }, {})
    
    const next = parseInt(decode.page) + 1

    if (array.length >= 20){
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <Link to={"?page="+parseInt(decode.page)} className="btn btn-sm">Anterior</Link>
                        <Link to={"?page="+next} className="btn btn-sm">Proxima</Link>
                    </div>
                </div>
            </div>
        )
    }else if(!array.length){
        return(
            <div>
            <div className="row">
                <div className="col-12">
                    <Link to={"?page="+next-1} className="btn btn-sm">Anterior</Link>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div>
            <div className="row">
                <div className="col-12">
                    <Link to={"?page="+parseInt(decode.page)} className="btn btn-sm">No Se</Link>
                </div>
            </div>
        </div>
        )
    }
 }