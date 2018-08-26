import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Container } from './Styled'

import Menu from './Menu'
import Nav from './Nav'

const Main = () => (
  <Router>
    <Container>
      <Menu />
      <Nav />
    </Container>
  </Router>
)

export default Main
