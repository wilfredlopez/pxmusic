import React from 'react'
import Header from './Header'
import {Route} from 'react-router-dom'

import Welcome from './Welcome'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Feature from './Feature'
import SignOut from './Auth/SignOut'


import Dashboard from './admin/Dashboard'

const App = ()=>{
    return (
        <div>
            <Header/>
            <Route exact path="/" component={Welcome} />
            <Route  path="/admin" component={Dashboard} />
            <Route  path="/login" component={SignIn} />
            <Route  path="/signup" component={SignUp} /> 
            <Route  path="/feature" component={Feature} /> 
            <Route  path="/signout" component={SignOut} /> 
        </div>
    )
}

export default App