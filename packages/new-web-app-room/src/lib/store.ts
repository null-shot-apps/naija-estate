import { create } from 'zustand';

interface AppState {
  walletAddress: string | null;
  setWalletAddress: (address: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  walletAddress: null,
  setWalletAddress: (address) => set({ walletAddress: address }),
}));
