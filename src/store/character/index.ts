import { CharacterState } from './state';
import { adjective, estate, highlight, identity } from "../../generators";
import { createWithEqualityFn } from 'zustand/traditional';

const useCharacterStore = createWithEqualityFn<CharacterState>((set) => ({
  character: null,
  reroll: () => {
    set((state) => ({
      ...state,
      character: {
        type: 'noble',
        identity: identity(),
        highlight: highlight(),
        adjective: adjective(),
        estate: estate(),
      }
    }))
  }
}))


export default useCharacterStore;