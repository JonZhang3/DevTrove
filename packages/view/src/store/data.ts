import { create } from "zustand";
import { libraryData } from "data";
import { array } from "@/utils";
import { search } from "@/service/search";
import type { LibraryItemType } from "data";

// all unique tags
const tags = Object.entries(
  array.count(libraryData.flatMap((item) => item.tags))
).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0].localeCompare(b[0]);
  }
  return b[1] - a[1];
});

type State = {
  searchText: string;
  searchData: Array<LibraryItemType>;
  selectedTags: Array<string>;
  selectedLangs: Array<string>;
  selectedGroups: Array<string>;
};

type Action = {
  setSrearchData(data: LibraryItemType[]): void;
  setSearchText: (text: string) => void;
  toSearch: () => void;
  selectTag(tag: string): void;
  selectLang(lang: string): void;
  selectGroup(group: string): void;
  clearFilters(): void;
};

const useData = create<State & Action>()((set, get) => ({
  searchText: "",
  searchData: libraryData,
  selectedTags: [],
  selectedLangs: [],
  selectedGroups: [],

  setSrearchData: (data) => {
    set({ searchData: data });
  },

  setSearchText: (text: string) => {
    set({ searchText: text });
    search(text, get().selectedTags, get().selectedGroups, get().selectedLangs);
  },
  toSearch: () => {
    search(
      get().searchText,
      get().selectedTags,
      get().selectedGroups,
      get().selectedLangs
    );
  },
  selectTag: (tag: string) => {
    const tags = get().selectedTags.includes(tag)
      ? get().selectedTags.filter((t) => t !== tag)
      : [...get().selectedTags, tag];
    set({ selectedTags: tags });
    search(get().searchText, tags, get().selectedGroups, get().selectedLangs);
  },
  selectLang: (lang: string) => {
    const langs = get().selectedLangs.includes(lang)
      ? get().selectedLangs.filter((t) => t !== lang)
      : [...get().selectedLangs, lang];
    set({ selectedLangs: langs });
    search(get().searchText, get().selectedTags, get().selectedGroups, langs);
  },
  selectGroup: (group: string) => {
    const groups = get().selectedGroups.includes(group)
      ? get().selectedGroups.filter((t) => t !== group)
      : [...get().selectedGroups, group];
    set({ selectedGroups: groups });
    search(get().searchText, get().selectedTags, groups, get().selectedLangs);
  },
  clearFilters: () => {
    set({
      selectedTags: [],
      selectedLangs: [],
      selectedGroups: [],
    });
    search(get().searchText, [], [], []);
  },
}));

export { tags };

export default useData;
