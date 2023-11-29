import { create } from "zustand";

type State = {
  theme: "light" | "dark";
};

type Action = {
  toggleTheme: () => void;
};

const useTheme = create<State & Action>()((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));

export default useTheme;
