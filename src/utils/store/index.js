import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import { sample } from '../../reducers'
import { saveState, loadState } from './persist'

const rootReducer = combineReducers({
  sample,
})

/* eslint-disable no-underscore-dangle */
const REDUX_DEVTOOLS =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
/* eslint-enable */

const composeEnhancers = REDUX_DEVTOOLS || compose

const configureStore = () => {
  const state = loadState()
  const store = createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(thunk)),
  )
  store.subscribe(
    throttle(() => {
      saveState(store.getState())
    }, 1000),
  )
  return store
}

export default configureStore
