import Character from '../components/Character'
import { compose, withHandlers, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'
import copyToClipboard from '../utils/copyToClipboard'
import aVsAn from '../utils/aVsAn'

const mapStateToProps = state => ({
  loading: state.character.loading,
  identity: state.character.identity,
  adjective: state.character.adjective,
  estate: state.character.estate
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    generateCharacter: actions.generateCharacter
  }, dispatch)
)

const handlers = {
  generateCharacterClick: props => ev => props.generateCharacter(),
  copyToClipboardClick: props => ev => copyToClipboard(buildTextString(props))
}

const buildTextString = ({ estate, identity, adjective }) => {
  return 'I am ' +
    aVsAn(identity) + ' ' +
    identity.toLowerCase() +
    ' who is the ' +
    adjective +
    ' god of ' +
    estate.toLowerCase()
}

const lifecycleMethods = {
  componentWillMount () {
    this.props.generateCharacter()
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Character)
