import randomRpgStuff from 'random-rpg-stuff'
import sample from './sample'
import pluralize from 'pluralize'

const generateCharacter = (character = {}) => ({
  highlight: character.highlight || sample(['iAm', 'identity', 'estate', 'god', 'ofEstate']),
  identity: character.identity || randomRpgStuff(['job', 'job', 'animal', 'class']),
  adjective: character.adjective || randomRpgStuff(['descriptor']),
  estate: character.estate || pluralize(randomRpgStuff('noun'))
})

module.exports = generateCharacter
