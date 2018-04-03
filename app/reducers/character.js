import * as types from '../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_ESTATE:
      return {
        ...state,
        estate: action.estate
      }
    default:
      return state
  }
}
