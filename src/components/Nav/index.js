import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from './Styled'

import Welcome from './Welcome'
import App from './App'

const Main = () => (
  <Container>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/app" component={App} />
      <Redirect to="/welcome" />
    </Switch>
  </Container>
)

export default Main
