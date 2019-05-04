import React from 'react'
import {connect} from 'react-redux'



import {SongList} from './SongList'
import './css/paginate.css'


class Welcome extends React.Component{
    render() {
        return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1 className="display-4">PX Music</h1>
                    <p>Tu sitio de descargas y noticias del genero</p>               
                </div>
            </div>
            <div className="alert alert-danger py-2">

            <p className="mt-2 text-center">Lo Mas Nuevo!
                <br/>
                
            </p>
            </div>
            <SongList url={'/api/music/all'} perPage={2}/>

        </div>
        )
    }
}





function mapStateToProps(state){
    return {
        
    }
}
export default connect(mapStateToProps)(Welcome)