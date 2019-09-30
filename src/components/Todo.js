import React from 'react'
import ProtoTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.ProtoTypes = {
    onClick: ProtoTypes.func.isRequired,
    completed: ProtoTypes.bool.isRequired,
    text: ProtoTypes.string.isRequired
}

export default Todo