import React from 'react'
import PropTypes from 'prop-types'

import mapping from '../../../utils/connect/mapping'

import { Container, Input } from './Styled'

const App = ({ state: { text }, actions: { updateText } }) => (
  <Container>
    <Input value={text} onChange={e => updateText(e.target.value)} />
  </Container>
)

App.propTypes = {
  state: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    updateText: PropTypes.func.isRequired,
  }).isRequired,
}

export default mapping(App, state => ({ state: { text: state.sample.text } }))
