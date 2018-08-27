import moment from 'moment'

import { SAMPLE_UPDATE_USER } from '../constants'

const defaultState = {
  '0': {
    name: 'florian',
    leave: {
      '0': {
        begin: moment(),
        end: moment().add(1, 'days'),
        comment: 'Mon commentaire',
        status: 'updated',
      },
    },
  },
  '1': {
    name: 'mickael',
    leave: {
      '0': {
        begin: moment(),
        end: moment().add(1, 'days'),
        comment: 'Mon commentaire',
        status: 'updated',
      },
    },
  },
}

const sample = (state = defaultState, action) => {
  switch (action.type) {
    case SAMPLE_UPDATE_USER:
      return state
    case '@@INIT':
    default:
      return state
  }
}

export default sample
