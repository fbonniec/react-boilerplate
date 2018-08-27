import moment from 'moment'
import { v4 } from 'uuid'

import { SAMPLE_UPDATE_USER, SAMPLE_ADD_LEAVE } from '../constants'

const defaultState = {
  '0': {
    name: 'florian',
    leave: {
      '0': {
        begin: moment().format(),
        end: moment()
          .add(1, 'days')
          .format(),
        comment: 'Mon commentaire',
        status: 'updated',
      },
    },
  },
  '1': {
    name: 'mickael',
    leave: {
      '0': {
        begin: moment().format(),
        end: moment()
          .add(1, 'days')
          .format(),
        comment: 'Mon commentaire',
        status: 'updated',
      },
    },
  },
}

const sample = (state = defaultState, action) => {
  switch (action.type) {
    case SAMPLE_ADD_LEAVE: {
      const { userId, leave } = action

      return {
        ...state,
        [userId]: {
          ...state[userId],
          leave: {
            ...state[userId].leave,
            [v4()]: leave,
          },
        },
      }
    }
    case SAMPLE_UPDATE_USER:
      return state
    case '@@INIT':
    default:
      return state
  }
}

export default sample
