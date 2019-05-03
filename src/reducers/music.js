
import {LOAD_MUSIC} from './../actions/types'

const INITIAL_STATE = {
    music: []
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        
        case LOAD_MUSIC:
            return action.payload
        default:
         return state
    }

}

