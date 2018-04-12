import Character from '../components/Character'
import { compose, withHandlers, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'
import generateCharacter from '../utils/generateCharacter'
import parseUrlObjectString from '../utils/parseUrlObjectString'

const mapStateToProps = (state, props) => {
  const urlParams = props.match.params

  return {
    loading: state.character.loading,
    urlCharacterString: urlParams.character,
    type: urlParams.type || 'noble',
    identity: state.character.identity,
    category: state.character.category,
    adjective: state.character.adjective,
    estate: state.character.estate,
    highlight: state.character.highlight
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    generateCharacter: actions.generateCharacter,
    setCharacter: actions.setCharacter
  }, dispatch)
)

const handlers = {
  generateCharacterClick: props => ev => props.generateCharacter(props.type)
}

const lifecycleMethods = {
  componentWillMount () {
    const urlCharacter = parseUrlObjectString(this.props.urlCharacterString)
    if (!urlCharacter) {
      this.props.generateCharacter(this.props.type)
    }

    const character = generateCharacter(this.props.type, urlCharacter)
    this.props.setCharacter(character)
  },

  componentWillReceiveProps (nProps) {
    if (!nProps) return
    if (nProps.match.params.character === this.props.urlCharacterString) return

    const urlCharacter = parseUrlObjectString(nProps.match.params.character)
    if (!urlCharacter) {
      this.props.generateCharacter(this.props.type)
    }

    const character = generateCharacter(nProps.type, urlCharacter)

    this.props.setCharacter(character)
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Character)
