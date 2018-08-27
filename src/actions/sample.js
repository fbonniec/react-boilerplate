import {
  SAMPLE_UPDATE_USER,
  SAMPLE_ADD_LEAVE,
  SAMPLE_UPDATE_LEAVE_STATUS,
} from '../constants'

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

export const updateLeaveStatusForUser = (
  status,
  userId,
  leaveId,
) => dispatch => {
  dispatch({
    type: SAMPLE_UPDATE_LEAVE_STATUS,
    status,
    userId,
    leaveId,
  })
}
