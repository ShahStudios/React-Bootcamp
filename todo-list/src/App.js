import React, { Component } from "react"

import TodoItem from '../src/components/TodoItem'
import todosData from '../src/todosData'

import '../src/styles.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App