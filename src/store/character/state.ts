import { Character, CharacterType } from "../../model/character";

type CharacterActions = {
  reroll: (type?: CharacterType) => void;
}

type CharacterData = {
  character: Character;
}

type CharacterState = CharacterActions & CharacterData;

export type { CharacterState };