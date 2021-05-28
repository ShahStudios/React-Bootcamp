// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser

import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return (
    <>
    <h1>Kazi</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eaque odio consectetur quam quibusdam aspernatur hic, pariatur explicabo eius recusandae nemo reprehenderit! Error suscipit, ex aut voluptatibus aliquam facilis debitis?</p>
    <ul>
      <li>Vegas</li>
      <li>Cali</li>
      <li>NY</li>
    </ul>
    </>
  )
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'))