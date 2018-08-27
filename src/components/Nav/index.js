import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Container } from './Styled'

import configureStore from '../../utils/store'

import User from './User'
import Leave from './Leave'

const store = configureStore()

const Main = () => (
  <Provider store={store}>
    <Container>
      <Switch>
        <Route path="/users/:id" component={Leave} />
        <Route path="/users" component={User} />
        <Redirect to="/users" />
      </Switch>
    </Container>
  </Provider>
)

export default Main
