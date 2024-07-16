import { createWithEqualityFn } from 'zustand/traditional';
import { character } from "../../generators";
import { CharacterState } from './state';

const useCharacterStore = createWithEqualityFn<CharacterState>((set) => ({
  character: character(),
  reroll: () => {
    set((state) => ({
      ...state,
      character: character(),
    }))
  }
}))


export default useCharacterStore;