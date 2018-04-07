import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import randomRpgStuff from 'random-rpg-stuff'
import pluralize from 'pluralize'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/character'
import sample from '../utils/sample'

export default function * () {
  yield takeEvery(types.GENERATE_CHARACTER, loader)
}

const generateCharacter = (character = {}) => ({
  highlight: character.highlight || sample(['iAm', 'identity', 'estate', 'god', 'ofEstate']),
  identity: character.identity || randomRpgStuff(['job', 'job', 'animal', 'class']),
  adjective: character.adjective || randomRpgStuff(['descriptor']),
  estate: character.estate || pluralize(randomRpgStuff('noun'))
})

export function * loader (action) {
  let i = 0
  yield put(actions.setLoading(true))
  while (i < 8) {
    yield put(actions.setCharacter(generateCharacter()))
    yield delay(50)
    i++
  }

  yield put(actions.setCharacter(generateCharacter(action.character)))
  yield put(actions.setLoading(false))
}
