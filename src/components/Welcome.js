import React from 'react'

import {loadAllMusic} from '../utils/loadMusic'


class Welcome extends React.Component{
    componentDidMount(){

        const music = loadAllMusic()

        console.log(music)

    }
    render() {
        return (
        <div className="container">
            <h1 className="display-4">Welcome! </h1>
            <div className="alert alert-info py-3">

            <p className="mt-4">Latest Music 
                <br/>
                
            </p>
            </div>
            
        </div>
        )
    }
}

export default Welcome