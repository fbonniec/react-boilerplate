import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Container } from './Styled'

import configureStore from '../../utils/store'

import Welcome from './Welcome'
import App from './App'

const store = configureStore()

const Main = () => (
  <Provider store={store}>
    <Container>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/app" component={App} />
        <Redirect to="/welcome" />
      </Switch>
    </Container>
  </Provider>
)

export default Main
