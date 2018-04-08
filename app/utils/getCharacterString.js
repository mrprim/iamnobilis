import aVsAn from './aVsAn'

const getCharacterString = character => {
  switch (character.type) {
    case 'noble': return noble(character)
    case 'warmain': return warmain(character)
    case 'strategist': return strategist(character)
    default: return noble(character)
  }
}

const noble = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the ' +
    character.adjective +
    ' god of ' +
    character.estate.toLowerCase() +
    '.'
}

const warmain = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the ' +
    character.adjective +
    ' Warmain who wields the Test of ' +
    character.estate.toLowerCase() +
    '.'
}

const strategist = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the ' +
    character.adjective +
    ' Strategist dying from ' +
    character.estate.toLowerCase() +
    '.'
}
module.exports = getCharacterString
