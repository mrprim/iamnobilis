import Layout from '../components/Layout'
import { compose, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const mapStateToProps = state => ({
  type: state.character.type
})

const mapDispatchToProps = dispatch => ({})

const handlers = {}

const lifecycleMethods = {}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Layout)
