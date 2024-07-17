import { createWithEqualityFn } from 'zustand/traditional';
import { character } from "../../generators";
import { CharacterState } from './state';
import { CharacterType } from '../../model/character';

const useCharacterStore = createWithEqualityFn<CharacterState>((set) => ({
  character: character('noble'),
  reroll: (type?: CharacterType) => {
    set((state) => ({
      ...state,
      character: character(type ?? state.character.type),
    }))
  }
}))


export default useCharacterStore;