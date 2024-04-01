import { create } from "zustand";
import { libraryData, groups, Group, languages, Language } from "data";
import { array } from "@/utils";
import { search } from "@/service/search";
import type { LibraryItemType } from "data";

// all unique tags
const tags = Object.entries(
  array.count(
    libraryData.flatMap((item) => item.tags),
    (tag) =>
      !groups.includes(tag as Group) && !languages.includes(tag as Language)
  )
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
  selectedStack: string;
};

type Action = {
  setSrearchData(data: LibraryItemType[]): void;
  setSearchText(text: string): void;
  toSearch(searchText?: string): void;
  selectTag(tag: string): void;
  selectLang(lang: string): void;
  selectGroup(group: string): void;
  selectStack(stack: string): void;
  clearFilters(): void;
};

const useData = create<State & Action>()((set, get) => ({
  searchText: "",
  searchData: libraryData,
  selectedTags: [],
  selectedLangs: [],
  selectedGroups: [],
  selectedStack: "React",

  setSrearchData: (data) => {
    set({ searchData: data });
  },

  setSearchText: (text: string) => {
    set({ searchText: text });
  },
  toSearch: (searchTest: string) => {
    search(
      searchTest,
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
    search("", tags, get().selectedGroups, get().selectedLangs);
  },
  selectLang: (lang: string) => {
    const langs = get().selectedLangs.includes(lang)
      ? get().selectedLangs.filter((t) => t !== lang)
      : [...get().selectedLangs, lang];
    set({ selectedLangs: langs });
    search("", get().selectedTags, get().selectedGroups, langs);
  },
  selectGroup: (group: string) => {
    const groups = get().selectedGroups.includes(group)
      ? get().selectedGroups.filter((t) => t !== group)
      : [...get().selectedGroups, group];
    set({ selectedGroups: groups });
    search("", get().selectedTags, groups, get().selectedLangs);
  },
  clearFilters: () => {
    set({
      searchText: "",
      selectedTags: [],
      selectedLangs: [],
      selectedGroups: [],
    });
    search("", [], [], []);
  },
  selectStack: (stack: string) => {
    if (get().selectedStack === stack) {
      return;
    }
    set({ selectedStack: stack });
  },
}));

export { tags };

export default useData;
