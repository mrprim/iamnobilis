import { MutableRefObject } from "react";
import { Character, CharacterType } from "../../model/character";

type CharacterActions = {
  reroll: (type?: CharacterType) => void;
  setDescriptionRef: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

type CharacterData = {
  character: Character;
  descriptionRef: MutableRefObject<HTMLDivElement | null> | null;
}

type CharacterState = CharacterActions & CharacterData;

export type { CharacterState };