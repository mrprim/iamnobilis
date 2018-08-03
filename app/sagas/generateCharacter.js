import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import generateCharacter from '../utils/generateCharacter'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

export function * loader (action) {
  let i = 0

  yield put(actions.setLoading(true))

  while (i < 5) {
    const char = generateCharacter(action.characterType)
    yield put(actions.setCharacter(char))
    yield delay(50)
    i++
  }

  generateCharacter(action.characterType, action.character)
  // window.location.hash = action.characterType + '/' + encodeURIComponent(JSON.stringify(character))

  yield put(actions.setLoading(false))
}
