export const SHOW_MASK = 'SHOW_MASK'
export const HIDE_MASK = 'HIDE_MASK'

export function showMask(){
    return{
        type:SHOW_MASK
    }
}

export function hideMask(){
    return{
        type:HIDE_MASK
    }
}