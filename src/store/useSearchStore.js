import { create } from "zustand";

export const useSearchStore = create((set) => ({
    input: "",
    setInput: (val) => set({ input: val }),
    deleteInput: () => set({ input: "" }),
}));
