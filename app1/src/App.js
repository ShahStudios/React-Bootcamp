import React from 'react'

import TodoItem from '../src/components/TodoItem'
import todosData from '../src/todosData'

import '../src/styles.css'

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App