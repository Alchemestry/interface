import { create } from 'zustand';

interface UseWalletSection {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useWalletSection = create<UseWalletSection>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
