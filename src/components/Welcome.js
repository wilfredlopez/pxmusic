import React from 'react'
import {connect} from 'react-redux'



import {SongList} from './SongList'



class Welcome extends React.Component{
    render() {
        return (
        <div className="container px-0">
            <div className="row text-center px-0 mx-0">
                <div className="col-12 px-0">
                    <h1 className="display-4">PX Music</h1>
                    <p className="p-0 m-0">Tu sitio de descargas y noticias del genero</p> 
                    <div className="col-12 px-0">
                    <div className="alert alert-danger py-2 px-0">

                    <p className="mt-2 p-0 text-center">Lo Mas Nuevo!
                        <br/>  
                    </p>
                    </div>
                </div>              
                </div>

            </div>

            <SongList url={'/api/music/all'} perPage={4}/>

        </div>
        )
    }
}





function mapStateToProps(state){
    return {
        
    }
}
export default connect(mapStateToProps)(Welcome)