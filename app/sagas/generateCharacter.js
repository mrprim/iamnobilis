import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import generateCharacter from '../utils/generateCharacter'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

export function * loader (action) {
  yield put(actions.setLoading(true))
  const char = yield generateCharacter(action.characterType, action.character)
  yield put(actions.setCharacter(char))
  yield put(actions.setLoading(false))
}
