//必须要{}导入。。
import { ADD_COMMENT } from '../actions'
import { REMOVE_COMMENT } from '../actions'

function courseComments(state = [], action){
    switch(action.type){
        case ADD_COMMENT:
            return[
                ...state,
                {user: action.author, text: action.comment}
            ]
        case REMOVE_COMMENT:
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state
    }
}


function comments(state = [], action){
    if(typeof action.courseId !== 'undefined'){
        return {
            ...state,
            [action.courseId]: courseComments(state[action.courseId], action)
        }
    }
    return state
}

export default comments