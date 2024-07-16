import { createWithEqualityFn } from 'zustand/traditional';
import { ModalState } from './state';

const useModalStore = createWithEqualityFn<ModalState>((set) => ({
  name: null,
  toggle: (name?: string) => {
    set((state) => ({
      ...state,
      name: state.name === name ? null : name,
    }))
  }
}))


export default useModalStore;