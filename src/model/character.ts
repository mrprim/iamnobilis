type CharacterType = 'noble' | 'zu';

type CharacterStat = 'skills' | 'aspect' | 'domain' | 'persona' | 'treasure';

interface Character {
  type: CharacterType,
  identity: string,
  adjective: string,
  estate: string,
  stats: Record<CharacterStat, boolean>,
}

interface Noble extends Character {
  type: 'noble'
}

interface Zu extends Character {
  type: 'zu'
}

export type { CharacterType, CharacterStat, Character, Noble, Zu }