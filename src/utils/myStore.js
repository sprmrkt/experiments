import create from 'zustand'

export const useExplainerStore = create((set) => ({
  scene: 2,
  increaseScene: () => set((state) => ({ scene: state.scene + 1 })),
  decreaseScene: () => set((state) => ({ scene: state.scene - 1 })),
}))