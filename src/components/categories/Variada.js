import React from 'react'


import {SongList} from '../SongList'


class Variada extends React.Component{
    render() {
        return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1 className="display-4">PX Music</h1>
                    <p>Musica Variada</p>               
                </div>
            </div>
            <SongList url={'/api/music/variada'} perPage={4}/>

        </div>
        )
    }
}



export default Variada