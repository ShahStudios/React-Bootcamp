import React, { Component } from 'react'

import '../src/styles.css'
import SearchMovies from './components/SearchMovies'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className="title">Movie Search</h1>
                <SearchMovies />
            </div>
        )
    }
}

export default App