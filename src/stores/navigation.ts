import { create } from 'zustand'

interface NavigationState {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
  toggleMenu: () => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))
