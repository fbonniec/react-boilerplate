import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Container, Table, TrLeave } from './Styled'

import mapping from '../../../utils/connect/mapping'

const Leave = props => {
  const {
    state: { users },
    match: {
      params: { id },
    },
  } = props

  const user = users[id]

  if (!user)
    return (
      <Container>
        <div>User does not exists</div>
      </Container>
    )

  const data = Object.keys(user.leave).map((acc, v) => {
    const leave = user.leave[v]
    return { key: v, ...leave }
  }, [])

  return (
    <Container>
      {user ? (
        <Table>
          <tbody>
            <tr>
              <th>date de début</th>
              <th>date de fin</th>
              <th>commentaire</th>
              <th>status</th>
            </tr>
            {data.map(({ key, ...leave }) => (
              <TrLeave key={key}>
                <td>{moment(leave.begin).format('LL')}</td>
                <td>{moment(leave.end).format('LL')}</td>
                <td>{leave.comment}</td>
                <td>{leave.status}</td>
              </TrLeave>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>User does not exists</div>
      )}
    </Container>
  )
}

Leave.propTypes = {
  state: PropTypes.shape({
    users: PropTypes.shape({}).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default mapping(Leave, state => ({
  state: {
    users: state.sample,
  },
}))
