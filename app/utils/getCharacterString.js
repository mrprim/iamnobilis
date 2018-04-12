import aVsAn from './aVsAn'
import toTitleCase from './toTitleCase'

const getCharacterString = (type, character) => {
  switch (type) {
    case 'noble': return noble(character)
    case 'warmain': return warmain(character)
    case 'strategist': return strategist(character)
    case 'zu': return zu(character)
    case 'imperator': return imperator(character)
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
    toTitleCase(character.estate) +
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
    toTitleCase(character.adjective) +
    ' ' +
    toTitleCase(character.estate) +
    '-style martial arts.'
}

const imperator = character => {
  return 'I am ' +
    aVsAn(character.identity) + ' ' +
    character.identity.toLowerCase() +
    ' who is the ' +
    character.adjective.toLowerCase() + ' ' +
    character.category + ' ' +
    'of ' +
    formatEstateList(character.estate) + '.'
}

const formatEstateList = estates => {
  estates = [...estates]
  const last = estates.pop()

  return estates.join(', ') + ', and ' + last.toLowerCase()
}

export default getCharacterString
