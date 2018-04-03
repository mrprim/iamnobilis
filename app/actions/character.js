import * as types from '../constants/actionTypes'

export const generateCharacter = () => ({
  type: types.GENERATE_CHARACTER
})

export const setCharacter = character => ({
  type: types.SET_CHARACTER,
  character
})
export const setEstate = estate => ({
  type: types.SET_ESTATE,
  estate
})
