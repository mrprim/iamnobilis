import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import generators from 'random-rpg-stuff'
import sample from '../utils/sample'
import pluralize from 'pluralize'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

export function * loader (action) {
  let i = 0
  yield put(actions.setLoading(true))
  while (i < 8) {
    const char = {
      identity: sample([
        generators.things.animals(),
        generators.characters.classes()
      ]),
      adjective: generators.misc.descriptors(),
      estate: pluralize(sample([
        generators.things.random(),
        generators.things.random(),
        generators.things.random(),
        generators.characters.classes()
      ]))
    }
    yield put(actions.setCharacter(char))
    yield delay(50)
    i++
  }
  yield put(actions.setLoading(false))
}
