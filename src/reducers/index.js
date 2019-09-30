import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilters from './visibilityFilters'

const todoApp = combineReducers({
    visibilityFilters,
    todos
})

export default todoApp