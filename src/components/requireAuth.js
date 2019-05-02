import React from 'react'
import {connect} from 'react-redux'

//THIS IS A HIGHER ORDER COMPONENT (HOC)
export default (ChildComponent)=> {
    class ComposedComponent extends React.Component{
        componentDidMount(){
            this.isLoggedIn()
        }
    
        componentDidUpdate(){
            this.isLoggedIn()
        }
    
        isLoggedIn(){
            if(!this.props.auth){
                this.props.history.push('/login')
            }
        }

        render(){
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.auth.authenticated
        }
    }
    return connect(mapStateToProps)(ComposedComponent)
}