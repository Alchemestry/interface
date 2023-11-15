import { create } from 'zustand';

interface UseCautionModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCautionModal = create<UseCautionModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
