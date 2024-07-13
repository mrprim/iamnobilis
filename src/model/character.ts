type CharacterType = 'noble';

type CharacterStat = 'skills' | 'aspect' | 'domain' | 'persona' | 'treasure';

interface Character {
  type: CharacterType,
  highlight: CharacterStat,
  identity: string,
  adjective: string,
  estate: string,
}

export type { CharacterType, CharacterStat, Character }