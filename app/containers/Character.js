import Character from '../components/Character'
import { compose, withHandlers, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'
import copyToClipboard from '../utils/copyToClipboard'
import generateCharacter from '../utils/generateCharacter'
import getCharacterString from '../utils/getCharacterString'

const mapStateToProps = (state, props) => {
  return {
    loading: state.character.loading,
    urlParam: props.match.params.character,
    type: state.character.type,
    identity: state.character.identity,
    adjective: state.character.adjective,
    estate: state.character.estate,
    highlight: state.character.highlight
  }
}

const getUrlCharacter = string => {
  if (!string) return

  try {
    return JSON.parse(decodeURIComponent(string))
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
  generateCharacterClick: props => ev => {
    const character = generateCharacter({ type: props.type })
    window.location.hash = encodeURIComponent(JSON.stringify(character))
  },
  copyToClipboardClick: props => ev => copyToClipboard(getCharacterString(props))
}

const lifecycleMethods = {
  componentWillMount () {
    const character = generateCharacter(getUrlCharacter(this.props.urlParam))

    window.location.hash = encodeURIComponent(JSON.stringify(character))
    this.props.generateCharacter(character)
  },
  componentWillReceiveProps (nProps) {
    if (!nProps) return
    if (nProps.match.params.character === this.props.urlParam) return

    const nCharacter = getUrlCharacter(nProps.match.params.character)
    this.props.generateCharacter(nCharacter)
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Character)
