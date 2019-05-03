import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'

import auth from './auth'
import music from './music'


export default combineReducers({
  auth: auth,
  form: formReducer,
  music: music
})


 