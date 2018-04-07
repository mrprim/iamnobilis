import * as types from '../constants/actionTypes'

export const generateCharacter = character => ({
  type: types.GENERATE_CHARACTER,
  character
})

export const setCharacter = character => ({
  type: types.SET_CHARACTER,
  character
})

export const setEstate = estate => ({
  type: types.SET_ESTATE,
  estate
})

export const setLoading = loading => ({
  type: types.SET_LOADING,
  loading
})
