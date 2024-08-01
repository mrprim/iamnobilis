import { createWithEqualityFn } from 'zustand/traditional';
import { character as characterGenerator } from "../../generators";
import { CharacterState } from './state';
import { Character, CharacterType } from '../../model/character';
import { MutableRefObject } from 'react';
import { decode, encode } from '../../utils/characterEncoder';
import { getQueryParam, setQueryParam } from '../../utils/url-utils';

const initializeCharacter = (): Character => {
  const data = getQueryParam('c') ?? '';
  const character = decode(data);

  if (character) {
    return character;
  }
  const newCharacter = characterGenerator('noble');
  const encoded = encode(newCharacter);
  setQueryParam('c', encoded)

  return newCharacter
};

const useCharacterStore = createWithEqualityFn<CharacterState>((set) => ({
  character: initializeCharacter(),
  descriptionRef: null,
  setDescriptionRef: (descriptionRef: MutableRefObject<HTMLDivElement | null>) => {
    set((state) => ({
      ...state,
      descriptionRef
    }))
  },
  reroll: (type?: CharacterType) => {
    set((state) => {
      const character = characterGenerator(type ?? state.character.type)
      const data = encode(character);
      setQueryParam('c', data)

      return {
        ...state,
        character,
      }
    });
  }
}))


export default useCharacterStore;