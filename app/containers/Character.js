import Character from '../components/Character'
import { compose, withHandlers, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'
import copyToClipboard from '../utils/copyToClipboard'
import aVsAn from '../utils/aVsAn'

const mapStateToProps = (state, props) => {
  const urlCharacter = getUrlCharacter(props.match.params.character)

  return {
    loading: state.character.loading,
    identity: state.character.identity || urlCharacter.identity,
    adjective: state.character.adjective || urlCharacter.adjective,
    estate: state.character.estate || urlCharacter.estate,
    highlight: state.character.highlight || urlCharacter.highlight
  }
}

const getUrlCharacter = string => {
  if (!string) return

  try {
    return JSON.parse(string)
  } catch (ex) {
    console.log('Unable to parse URL paramater', ex)
  }
}

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
    const character = {
      identity: this.props.identity,
      adjective: this.props.adjective,
      estate: this.props.estate,
      highlight: this.props.highlight
    }

    this.props.generateCharacter(character)
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Character)
