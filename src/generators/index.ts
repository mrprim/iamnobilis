import generator, { formatters } from '@mrprim/random-rpg-stuff';
import sample from '../utils/randomizer-utils';
import { Character, CharacterStat, CharacterType, Noble, Zu } from '../model/character';

type Generator<T = string> = () => T;

const type: Generator<CharacterType> = () => sample<CharacterType>(['noble', 'zu'])!
const identity: Generator = () => generator(['job', 'job', 'animal', 'class']);
const adjective: Generator = () => generator(['descriptor']);
const estate: Generator = () => generator('noun', { format: formatters.pluralize });

const character = (inputType?: CharacterType): Character => {
  const characterType = inputType ? inputType : type()

  if (characterType === 'zu') {
    return zu();
  }
  return noble();
}

const noble: Generator<Noble> = () => {
  const highlight = sample<CharacterStat>(['skills', 'aspect', 'domain', 'persona', 'treasure'])!

  return ({
    type: 'noble',
    identity: identity(),
    adjective: adjective(),
    estate: estate(),
    stats: {
      skills: highlight === 'skills',
      aspect: highlight === 'aspect',
      domain: highlight === 'domain',
      persona: highlight === 'persona',
      treasure: highlight === 'treasure',

    }
  });
}

const zu: Generator<Zu> = () => {
  const highlight = sample<CharacterStat>(['skills', 'aspect', 'domain', 'persona', 'treasure'])!

  return ({
    type: 'zu',
    identity: identity(),
    adjective: adjective(),
    estate: estate(),
    stats: {
      skills: highlight === 'skills',
      aspect: highlight === 'aspect',
      domain: highlight === 'domain',
      persona: highlight === 'persona',
      treasure: highlight === 'treasure',
    }
  });
}


export { type, identity, adjective, estate, noble, character, zu }
