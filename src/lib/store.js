import { create } from "zustand";

export const useStore = create((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode: darkMode }),
}));
