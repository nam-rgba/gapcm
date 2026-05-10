import { create } from 'zustand'



interface StepStoreState {
    current: number;
    setCurrent: (step: number) => void;
}

 export const useStep = create<StepStoreState>((set) => ({
    current: 0,
    setCurrent: (step) => set({ current: step }),
}))







    