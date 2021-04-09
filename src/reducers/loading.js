import {SHOW_MASK,HIDE_MASK} from '../actions/loading'

export default function loading(state=true,action){
    switch(action.type){
        case SHOW_MASK:
            state=true;
            return state
        case HIDE_MASK:
            state=false;
            return state;
        default:
            return state
    }
}