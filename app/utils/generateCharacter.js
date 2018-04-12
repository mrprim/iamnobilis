import randomRpgStuff from 'random-rpg-stuff'
import sample from './sample'
import pluralize from 'pluralize'
import { roll } from './dice'

const generateCharacter = (type, character = {}) => {
  switch (type) {
    case 'imperator': return generateImperator(character)
    default: return generate(character)
  }
}

const generateImperator = character => {
  const estateCount = roll(4) + 2
  const estates = []
  for (let i = 0; i < estateCount; i++) {
    estates.push(pluralize(randomRpgStuff('noun')))
  }

  return {
    highlight: character.highlight || sample(['skills', 'aspect', 'domain', 'persona', 'treasure']),
    category: character.category || sample(['angel', 'devil', 'light magister', 'dark magister', 'wildlord', 'true god']),
    identity: character.identity || randomRpgStuff(['job', 'job', 'animal', 'class']),
    adjective: character.adjective || randomRpgStuff(['descriptor']),
    estate: character.estate || estates
  }
}

const generate = character => ({
  highlight: character.highlight || sample(['skills', 'aspect', 'domain', 'persona', 'treasure']),
  identity: character.identity || randomRpgStuff(['job', 'job', 'animal', 'class']),
  adjective: character.adjective || randomRpgStuff(['descriptor']),
  estate: character.estate || pluralize(randomRpgStuff('noun'))
})

export default generateCharacter
