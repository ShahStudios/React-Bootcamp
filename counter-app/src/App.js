import React, { Component } from 'react'

import '../src/styles.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increaseCount = this.increaseCount.bind(this)
        this.decreaseCount = this.decreaseCount.bind(this)
    }

    increaseCount() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decreaseCount() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseCount}>Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>
            </div>
        )
    }
}

export default App