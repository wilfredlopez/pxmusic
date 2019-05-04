import React from 'react'
import Header from './Header'
import {Route} from 'react-router-dom'

import Welcome from './Welcome'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import SignOut from './Auth/SignOut'
import Reggaeton from './categories/Reggaeton'
import Variada from './categories/Variada'
import Contacto from './Contacto'

import './css/paginate.css'

import Dashboard from './admin/Dashboard'

const App = ()=>{
    return (
        <div className="body-wrapper">
            <Header/>
            <Route exact path="/" component={Welcome} />
            <Route  path="/admin" component={Dashboard} />
            <Route  path="/login" component={SignIn} />
            <Route  path="/signup" component={SignUp} /> 
            <Route  path="/signout" component={SignOut} /> 
            <Route  path="/generos/reggaeton" component={Reggaeton} />
            <Route  path="/generos/variada" component={Variada} />
            <Route  path="/contacto" component={Contacto} />
        </div>
    )
}

export default App