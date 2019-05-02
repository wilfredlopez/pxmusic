import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../../actions'

class SignOut extends React.Component{
    componentDidMount(){
        this.props.signOut()
        this.props.history.push('/')
    }
    render() {
        return (
        <div>
            <h1>SignOut Page</h1>
            <p>Only Loggedin users are allowed</p>
        </div>
        )
    }
}



export default connect(null, actions)(SignOut)