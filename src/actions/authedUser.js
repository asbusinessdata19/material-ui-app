export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const RELOAD_USER_INFO = 'RELOAD_USER_INFO'

export function login(user){
    return{
        type:LOGIN,
        user
    }
}

export function reloadUserInfo(users){
    return {
        type:RELOAD_USER_INFO,
        users
    }
}

export function logout(){
    return{
        type:LOGOUT
    }
}