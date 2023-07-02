import { create } from 'zustand';

interface IUseClaimReward {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useClaimReward = create<IUseClaimReward>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
