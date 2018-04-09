import aVsAn from './aVsAn'

const getCharacterString = (type, character) => {
  switch (type) {
    case 'noble': return noble(character)
    case 'warmain': return warmain(character)
    case 'strategist': return strategist(character)
    case 'zu': return zu(character)
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

const zu = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the master of ' +
    character.adjective +
    ' ' +
    character.estate.toLowerCase() +
    '-style martial arts.'
}

module.exports = getCharacterString
