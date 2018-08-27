import { SAMPLE_UPDATE_USER } from '../constants'
import { SAMPLE_ADD_LEAVE } from '../constants'

export const updateUser = text => dispatch => {
  dispatch({
    type: SAMPLE_UPDATE_USER,
    text,
  })
}

export const addLeaveForUser = (data, userId) => dispatch => {
  const leave = {
    ...data,
    status: 'waiting',
  }
  dispatch({
    type: SAMPLE_ADD_LEAVE,
    leave,
    userId,
  })
}
