import {GET_QUESTIONS,SAVE_QUESTION} from '../actions/questions'

export default function questions(state={},action){
    switch(action.type){
        case GET_QUESTIONS:
            return action.questions;
        case SAVE_QUESTION:
            state[action.question.id]= action.question;
            return state;
        default:
            return state;
    }
}