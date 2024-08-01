type CharacterType = 'noble' | 'zu';

type CharacterStat = 'skills' | 'aspect' | 'domain' | 'persona' | 'treasure';

type Stats = Record<CharacterStat, boolean>;

interface Character {
  type: CharacterType,
  identity: string,
  adjective: string,
  estate: string,
  stats: Stats,
}

interface Noble extends Character {
  type: 'noble'
}

interface Zu extends Character {
  type: 'zu'
}

const isNoble = (value: any): value is Noble => {
  if (!value) return false;
  if (value.type !== 'noble') return false;
  if (!value.identity) return false;
  if (!value.adjective) return false;
  if (!value.estate) return false;
  if (!value.stats) return false;

  return true;
}

const isZu = (value: any): value is Zu => {
  if (!value) return false;
  if (value.type !== 'zu') return false;
  if (!value.identity) return false;
  if (!value.adjective) return false;
  if (!value.estate) return false;
  if (!value.stats) return false;

  return true;
}


const isCharacter = (value: any): value is Character => {
  return isNoble(value) || isZu(value);
}

export type { CharacterType, CharacterStat, Character, Noble, Zu }
export { isCharacter, isNoble }