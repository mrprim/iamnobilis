import generator, { formatters } from '@mrprim/random-rpg-stuff';
import sample from '../utils/randomizer-utils';
import { CharacterStat } from '../model/character';

type Generator<T = string> = () => T;

const identity: Generator = () => generator(['job', 'job', 'animal', 'class']);
const adjective: Generator = () => generator(['descriptor']);
const estate: Generator = () => generator('noun', { format: formatters.pluralize });
const highlight: Generator<CharacterStat> = () => sample<CharacterStat>(['skills', 'aspect', 'domain', 'persona', 'treasure'])!

export { identity, adjective, estate, highlight }
