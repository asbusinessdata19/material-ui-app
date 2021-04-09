import { _getQuestions, _getUsers } from '../Utils/_DATA'
import {getUsers} from '../actions/users'
import {getQuestions} from '../actions/questions'
import {reloadUserInfo} from '../actions/authedUser'
import {showMask,hideMask} from '../actions/loading'
export const LOAD_DATA = 'LOAD_DATA'


export function loadIntialData(history) {
    return ((dispatch) => {
        Promise.all([_getQuestions(), _getUsers()]).then(([questions,users]) => {                  
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))  
            dispatch(reloadUserInfo(users)) 
            dispatch(hideMask())
            if(history!=null && history!=undefined){
                history.push('/');
            }
        }
        )
    })
}