import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let displayMessage
        if (this.state.isLoggedIn) {
            displayMessage = "in"
        } else {
            displayMessage = "out"
        }

        return (
            <div>
                <h1>You are currently logged {displayMessage}</h1>
            </div>
        )
    }
}

export default App