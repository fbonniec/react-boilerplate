import { SAMPLE_UPDATE_TEXT, SAMPLE_CLEAR_TEXT } from '../constants'

const defaultState = {
  text: '',
}

const sample = (state = defaultState, action) => {
  switch (action.type) {
    case SAMPLE_UPDATE_TEXT:
      return { text: action.text }
    case SAMPLE_CLEAR_TEXT:
    case '@@INIT':
      return { ...state, text: '' }
    default:
      return state
  }
}

export default sample
