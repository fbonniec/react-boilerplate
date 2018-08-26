import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from '../../actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...actions,
    },
    dispatch,
  ),
})

export default (Component, state) =>
  connect(
    state,
    mapDispatchToProps,
  )(Component)
