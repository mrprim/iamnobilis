import { createWithEqualityFn } from 'zustand/traditional';
import { character } from "../../generators";
import { CharacterState } from './state';

const useCharacterStore = createWithEqualityFn<CharacterState>((set) => ({
  character: character('noble'),
  reroll: () => {
    set((state) => ({
      ...state,
      character: character('noble'),
    }))
  }
}))


export default useCharacterStore;