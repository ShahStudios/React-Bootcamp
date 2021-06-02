import React, { Component } from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'



class App extends Component {
    render() {
        return (
            <div>
                <Header username="kazi" />
                <Greeting />
            </div>
        )
    }
}

export default App