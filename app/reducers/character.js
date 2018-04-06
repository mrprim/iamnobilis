import * as types from '../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_CHARACTER:
      return {
        ...state,
        identity: action.character.identity,
        adjective: action.character.adjective,
        estate: action.character.estate
      }
    default:
      return state
  }
}
