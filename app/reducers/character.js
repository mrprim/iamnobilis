import * as types from '../constants/actionTypes'

const initialState = {}

const setLoading = (state, action) => ({
  ...state,
  loading: action.loading
})

const setCharacter = (state, action) => ({
  ...state,
  identity: action.character.identity,
  adjective: action.character.adjective,
  estate: action.character.estate,
  highlight: action.character.highlight
})

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_LOADING: return setLoading(state, action)
    case types.SET_CHARACTER: return setCharacter(state, action)
    default: return state
  }
}
