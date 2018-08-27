import React from 'react'
import PropTypes from 'prop-types'

import { Container, Table, TrUser } from './Styled'

import mapping from '../../../utils/connect/mapping'

const User = props => {
  const {
    state: { users },
    history: { push },
  } = props

  const data = Object.keys(users).map((acc, v) => {
    const user = users[v]
    return { key: v, ...user }
  }, [])

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
          {data.map(({ key, name }) => (
            <TrUser key={key} onClick={() => push(`/users/${key}`)}>
              <td>{key}</td>
              <td>{name}</td>
            </TrUser>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

User.propTypes = {
  state: PropTypes.shape({
    users: PropTypes.shape({}).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default mapping(User, state => ({
  state: {
    users: state.sample,
  },
}))
