import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import comments from './comments'
import courses from './courses'

const rootReducer = combineReducers({courses, comments, routing: routerReducer})

export default rootReducer

