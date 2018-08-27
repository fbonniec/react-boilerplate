import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { Container } from './Styled'

import Section from './Section'

const sections = [{ key: 'users', title: 'User' }]

const Menu = props => {
  const {
    history: { push },
    location: { pathname },
  } = props
  return (
    <Container>
      {sections.map(({ key, title }) => (
        <Section
          key={key}
          to={key}
          title={title}
          isActive={!!pathname.match(key)}
          onClick={() => push(`/${key}`)}
        />
      ))}
    </Container>
  )
}

Menu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(Menu)
