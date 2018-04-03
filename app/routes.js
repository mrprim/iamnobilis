import Character from './containers/Character'

const exactRoute = (path, component) => ({ path, component, exact: true })
// const route = (path, component) => ({path, component})

export default [
  exactRoute('/', Character)
]
