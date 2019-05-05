import React from 'react'
import {connect} from 'react-redux'

import requireAuth from '../requireAuth'
//import UploadForm from './UploadForm'
import NewFormN from './NewFormN'

class Dashboard extends React.Component{
    state = {
        showUpload: true
    }

    async uploadSong(e){
        e.preventDefault()
        
        try{
           // this.props.destroy()
           console.log('destroy')
            }catch(err){
                console.log('there was an error')
                
            }
    }

    render() {
        return (
        <div className="container">
        <div className="row border justify-content-center d-flex align-content-center">
            <div className="col-12 d-flex">
                <h1 className="display-4 p-auto m-auto text-center">Admin </h1>
                <p className="float-right"><a id="db-logout" className="btn btn-light btn-sm float-right" href="/signout">Signout</a></p>
            </div>
        </div>

            <div className="row mt-3">
                <div className="col-12">
                        <h2 className="text-center">Actions</h2>        
                </div>
            </div>
            <div className="row mt-2 p-2 border bg-secondary align-content-center justify-content-center d-flex">
                <div className="col text-center"> 
                {this.state.showUpload ?  
                    <button 
                        onClick={()=> {this.setState({showUpload: !this.state.showUpload})}} 
                        className="btn btn-danger text-center btn-sm">
                        Hide upload
                    </button> 
                : 
                    <button 
                            onClick={()=> {this.setState({showUpload: !this.state.showUpload})}} 
                            className="btn btn-primary text-center btn-sm">
                            Upload New
                    </button> 
                }
                </div>

                <div className="col text-center">
                    <button className="btn btn-primary btn-sm">Create User</button>
                </div>
            </div>

            {this.state.showUpload && <NewFormN 
                onUploadSubmit={(e) => {this.uploadSong(e)}}
            /> }

            
        </div>
        )
    }
}

function mapStateToProps(state){
    return {auth: state.auth.authenticated}
}


export default connect(mapStateToProps)(requireAuth(Dashboard))

 