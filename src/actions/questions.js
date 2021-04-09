import {_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../Utils/_DATA'
import {loadIntialData} from '../actions/shared'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function getQuestions(questions){
    return{
        type:GET_QUESTIONS,
        questions
    }
}

export function handleGetQuestions(){
    return((dispatch)=>{
        _getQuestions().then((questions)=>{
            dispatch(getQuestions(questions))
        })
    })
}

export function handleSaveQuestion(optionOneText, optionTwoText, author,history){
    let question = {
        optionOneText,
        optionTwoText,
        author
    };
    return ((dispatch)=>{
        _saveQuestion(question).then((question)=>{
            dispatch(loadIntialData(history));            
        })
    })
}

export function handleAnswerQuestion(authedUser, qid, answer){
    let questionAnswer={
        authedUser,
        qid,
        answer
    }
    return((dispatch)=>{
        _saveQuestionAnswer(questionAnswer).then(()=>{
            dispatch(loadIntialData());
        })
    })

}


