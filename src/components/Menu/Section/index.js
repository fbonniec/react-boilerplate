import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './Styled'

const Section = ({ title, isActive, onClick }) => (
  <Container isActive={isActive} onClick={onClick}>
    <Title>{title}</Title>
  </Container>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Section
