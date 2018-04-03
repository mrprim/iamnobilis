import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import generators from 'random-rpg-stuff'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

export function * loader (action) {
  let i = 0
  while (i < 8) {
    yield put(actions.setEstate(generators.things.random()))
    yield delay(50)
    i++
  }
}
