import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import randomRpgStuff from 'random-rpg-stuff'
import pluralize from 'pluralize'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

export function * loader (action) {
  let i = 0
  yield put(actions.setLoading(true))
  while (i < 8) {
    const char = {
      identity: randomRpgStuff(['animal', 'class']),
      adjective: randomRpgStuff(['descriptor']),
      estate: pluralize(randomRpgStuff('noun'))
    }
    yield put(actions.setCharacter(char))
    yield delay(50)
    i++
  }
  yield put(actions.setLoading(false))
}
