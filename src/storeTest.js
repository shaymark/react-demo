import { createStore } from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

const store = createStore(todoApp, window.STATE_FROM_SERVER)

const storeTest = () => {
    console.log(store.getState())

    const unsuscrive = store.subscribe(() => console.log(store.getState()))

    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about sore'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    unsuscrive()
}

export default storeTest