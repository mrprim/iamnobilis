import Controls from '../components/Controls'
import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as actions from '../actions/character'
import copyToClipboard from '../utils/copyToClipboard'
import getCharacterString from '../utils/getCharacterString'

const mapStateToProps = state => ({
  character: state.character || {}
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    //    generateCharacter: actions.generateCharacter
  }, dispatch)
)

const handlers = {
  copyToClipboardClick: props => ev => copyToClipboard(getCharacterString(props.character))
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)

export default enhance(Controls)
