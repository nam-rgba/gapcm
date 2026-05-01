import { create } from "zustand";
import type { Module } from "../../../../types/module.type";
import { immer } from 'zustand/middleware/immer';




interface ModuleState {
    module: Module | null;
    setBasicInfo: (info: Omit<Module, 'id'>) => void;
}


export const initialModuleState: ModuleState = {
    module: null,
    setBasicInfo: () => {},
}

const useModule = create<ModuleState>()(immer((set)=>({
    module: null,
    setBasicInfo: (info) => set((state) => ({
        module: {
            ...state.module,
            ...info,
        } as Module
    })),
})))

export { useModule }