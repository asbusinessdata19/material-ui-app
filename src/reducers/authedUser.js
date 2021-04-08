import {LOGIN,LOGOUT} from '../actions/authedUser'


export default function authedUser(state=null,action){
    switch(action.type){
        case LOGIN:
            return action.user
        case LOGOUT:
            state=null;
            return state
        default:
            return state
    }
}