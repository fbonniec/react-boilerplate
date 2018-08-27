import { SAMPLE_UPDATE_USER } from '../constants'

export const updateUser = text => dispatch => {
  dispatch({
    type: SAMPLE_UPDATE_USER,
    text,
  })
}
