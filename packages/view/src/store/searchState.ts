import { create } from "zustand";

type State = {
  searching: boolean;
};

type Action = {
  setSearching: (search: State["searching"]) => void;
};

const useSearchState = create<State & Action>((set) => ({
  searching: false,
  setSearching: (search) => set(() => ({ searching: search })),
}));

export default useSearchState;
