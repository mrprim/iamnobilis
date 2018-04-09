import Controls from '../components/Controls'
import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'
import copyToClipboard from '../utils/copyToClipboard'
import getCharacterString from '../utils/getCharacterString'

const mapStateToProps = (state, props) => ({
  type: props.match.params.type || 'noble',
  character: state.character || {}
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    generateCharacter: actions.generateCharacter
  }, dispatch)
)

const handlers = {
  loadClick: props => type => ev => props.generateCharacter(type),
  copyToClipboardClick: props => ev => copyToClipboard(getCharacterString(props.type, props.character))
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)

export default enhance(Controls)
