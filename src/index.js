import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import './styles/main.css'

import reducers from './reducers/index'
import App from './components/App';


 
const store = createStore(
    reducers,
    {
        auth:{authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(thunk)
    )
    

    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>, document.getElementById('root'));
    
    