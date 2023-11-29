import { create } from "zustand";

type State = {
  searching: boolean;
  searchInputFocus: boolean;
};

type Action = {
  setSearching: (search: State["searching"]) => void;
  focusSearchInput: (focus: boolean) => void;
};

const useSearchState = create<State & Action>()((set) => ({
  searching: false,
  searchInputFocus: false,
  setSearching: (search) =>
    set(() => ({ searching: search, searchInputFocus: search })),
  focusSearchInput: (focus) => set(() => ({ searchInputFocus: focus })),
}));

export default useSearchState;
