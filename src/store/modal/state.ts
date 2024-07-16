type ModalActions = {
  toggle: (name?: string) => void;
}

type ModalData = {
  name: string | null;
}

type ModalState = ModalActions & ModalData;

export type { ModalState };