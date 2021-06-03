import React from "react"

import TodoItem from '../src/components/TodoItem'
import todosData from '../src/todosData'

import '../src/styles.css'

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App