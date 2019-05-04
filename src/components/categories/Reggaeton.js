import React from 'react'


import {SongList} from '../SongList'


class Reggaeton extends React.Component{
    render() {
        return (
        <div className="container px-0">
            <div className="row text-center px-0 mx-0">
                <div className="col-12 px-0">
                    <h1 className="display-4">PX Music</h1>
                    <p className="p-0 m-0">Reggaeton</p>               
                </div>
            </div>

            <SongList url={'/api/music/reggaeton'} perPage={4}/>

        </div>
        )
    }
}



export default Reggaeton