import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisableTodoList from '../containers/VisableTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisableTodoList />
        <Footer />
    </div>
)

export default App