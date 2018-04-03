import Character from '../components/Character'
import { compose, withHandlers, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/character'

const mapStateToProps = state => ({
  estate: state.character.estate
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    generateCharacter: actions.generateCharacter
  }, dispatch)
)

const handlers = {
  generateCharacterClick: props => ev => props.generateCharacter()
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
