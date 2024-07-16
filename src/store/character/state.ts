import { Character } from "../../model/character";

type CharacterActions = {
  reroll: () => void;
}

type CharacterData = {
  character: Character;
}

type CharacterState = CharacterActions & CharacterData;

export type { CharacterState };