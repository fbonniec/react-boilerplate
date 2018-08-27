import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Container, Table, TrLeave, Button } from './Styled'

import mapping from '../../../utils/connect/mapping'

import Modal from './Modal'
import New from './New'

class Leave extends React.Component {
  state = {
    displayModal: false,
  }

  toggleModal = () => {
    const { displayModal } = this.state
    this.setState({ displayModal: !displayModal })
  }

  onSave = leave => {
    const {
      actions: { addLeaveForUser },
      match: {
        params: { id },
      },
    } = this.props
    addLeaveForUser(leave, id)
    this.toggleModal()
  }

  setStatusForLeave = (status, leaveId) => {
    const {
      actions: { updateLeaveStatusForUser },
      match: {
        params: { id },
      },
    } = this.props
    updateLeaveStatusForUser(status, id, leaveId)
  }

  render() {
    const {
      state: { users },
      match: {
        params: { id },
      },
    } = this.props

    const user = users[id]

    if (!user)
      return (
        <Container>
          <div>User does not exists</div>
        </Container>
      )

    const data = Object.keys(user.leave).reduce((acc, v) => {
      const leave = user.leave[v]
      return [...acc, { key: v, ...leave }]
    }, [])

    const { displayModal } = this.state
    return (
      <Container>
        <Button onClick={this.toggleModal}>Add new leave</Button>
        {displayModal && (
          <Modal>
            <New onSave={this.onSave} />
          </Modal>
        )}
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
                  {leave.status === 'waiting' ? (
                    <td>
                      <Button
                        onClick={() => this.setStatusForLeave('accepted', key)}
                      >
                        accepted
                      </Button>
                      <Button
                        onClick={() => this.setStatusForLeave('refused', key)}
                      >
                        refused
                      </Button>
                    </td>
                  ) : (
                    <td>{leave.status}</td>
                  )}
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
  actions: PropTypes.shape({
    addLeaveForUser: PropTypes.func.isRequired,
    updateLeaveStatusForUser: PropTypes.func.isRequired,
  }).isRequired,
}

export default mapping(Leave, state => ({
  state: {
    users: state.sample,
  },
}))
