import React from 'react'


import {SongList} from '../SongList'


class Reggaeton extends React.Component{
    render() {
        return (
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1 className="display-4">PX Music</h1>
                    <p>Reggaeton</p>               
                </div>
            </div>

            <SongList url={'/api/music/reggaeton'} perPage={4}/>

        </div>
        )
    }
}



export default Reggaeton