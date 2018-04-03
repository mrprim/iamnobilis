import sagaMiddleware from '../middleware'
import generateCharacter from './generateCharacter'

const sagas = [
  generateCharacter
]

export default function runSagas () {
  sagas.forEach(s => sagaMiddleware.run(s))
}
