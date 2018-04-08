import aVsAn from './aVsAn'

const getCharacterString = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the ' +
    character.adjective +
    ' god of ' +
    character.estate.toLowerCase()
}

module.exports = getCharacterString
