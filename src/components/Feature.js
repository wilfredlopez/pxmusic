import React from 'react'
import requireAuth from './requireAuth'

class Feature extends React.Component{
    render() {
        return (
        <div className="container">
        <p className="text-right"><a className="btn btn-light" href="/signout">Signout</a></p>
            <h1>Feature Page</h1>
            <p>Only Loggedin users are allowed</p>
        </div>
        )
    }
}

export default requireAuth(Feature)