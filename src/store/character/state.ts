import { Character } from "../../model/character";

type CharacterActions = {
  reroll: () => void;
}

type CharacterData = {
  character: Character | null;
}

type CharacterState = CharacterActions & CharacterData;

export type { CharacterState };