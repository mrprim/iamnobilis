import randomRpgStuff from 'random-rpg-stuff'
import sample from './sample'
import pluralize from 'pluralize'

const generateCharacter = (type, character = {}) => ({
  highlight: character.highlight || sample(['skills', 'aspect', 'domain', 'persona', 'treasure']),
  identity: character.identity || randomRpgStuff(['job', 'job', 'animal', 'class']),
  adjective: character.adjective || randomRpgStuff(['descriptor']),
  estate: character.estate || pluralize(randomRpgStuff('noun'))
})

module.exports = generateCharacter
