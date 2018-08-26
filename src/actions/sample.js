import { SAMPLE_UPDATE_TEXT, SAMPLE_CLEAR_TEXT } from '../constants'

export const updateText = text => dispatch => {
  dispatch({
    type: SAMPLE_UPDATE_TEXT,
    text,
  })
}

export const clearText = () => dispatch => {
  dispatch({
    type: SAMPLE_CLEAR_TEXT,
  })
}
