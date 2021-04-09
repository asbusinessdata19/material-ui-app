import {LOGIN,LOGOUT,RELOAD_USER_INFO} from '../actions/authedUser'


export default function authedUser(state=null,action){
    switch(action.type){
        case LOGIN:
            return action.user
        case LOGOUT:
            state=null;            
            return state
        case RELOAD_USER_INFO:
            if(state!=null){
                state = action.users[state.id]
                return state;
            }else{
                return state;
            }
        default:
            return state
    }
}