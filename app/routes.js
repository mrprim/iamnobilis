import Character from './containers/Character'

const route = (path, component) => ({ path, component, exact: true })
// const route = (path, component) => ({path, component})

export default [
  route('/:character', Character),
  route('/', Character)
]
