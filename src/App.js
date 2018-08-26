import React from 'react'
import logo from './logo.svg'
import './App.css'

import Main from './components'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Main />
  </div>
)

export default App
