import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from './../../actions/index'


class SignIn extends React.Component{
    onSubmit = (formProps)=>{
        this.props.SignIn(formProps, ()=>{
            this.props.history.push('/admin')
        })
    
    }
    render() {
        const {handleSubmit} = this.props
        return (
        <div className="container">
        <div className="row">
        <div className="col-sm-8 mb-1">
            <h1 className="display-4">Admin Login</h1>
            <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            
            <Field 
                type="email" 
                name="email"
                component="input"
                className="form-control" 
                id="InputEmail" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                autoComplete="none"
            />
            </div>
            <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <Field 
                name="password"
                component="input"
                type="password" 
                className="form-control" 
                id="InputPassword" 
                placeholder="Password" 
                autoComplete="none"
            />
            </div>
            <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="Check"/>
            <label className="form-check-label" htmlFor="Check">Remember me</label>
            </div>
            {this.props.errorMessage && <div className="alert alert-danger">{this.props.errorMessage}</div>}
            <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>

        </div>
        </div>
        )
    }
}


function mapStateToProps(state){
    return {
        auth: state.auth,
        errorMessage: state.auth.errorMessage
    }
}
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'SignIn' })
)(SignIn)


