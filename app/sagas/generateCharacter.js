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
    const char = {
      identity: generators.things.random(),
      descriptor: generators.things.random(),
      estate: generators.things.random()
    }
    yield put(actions.setCharacter(char))
    yield delay(50)
    i++
  }
}
