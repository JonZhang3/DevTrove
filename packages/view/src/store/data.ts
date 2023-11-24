import { create } from "zustand";
import allData from "data";
import { array } from "@/utils";
import type { ProjectItemType } from "data";

// all data
const data: Array<ProjectItemType> = [...allData.frontend, ...allData.backend];

// all unique tags
const tags = Object.entries(
  array.count(data.flatMap((item) => item.tags))
).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0].localeCompare(b[0]);
  }
  return b[1] - a[1];
});

type State = {
  searchText: string;
  searchData: Array<ProjectItemType>;
  selectedTags: Array<string>;
  selectedLangs: Array<string>;
  selectedGroups: Array<string>;
};

type Action = {
  setSearchText: (text: string) => void;
  toSearch: () => void;
  selectTag(tag: string): void;
  selectLang(lang: string): void;
  selectGroup(group: string): void;
  clearFilters(): void;
};

/**
 * Searchs all data.
 * If the keyword is empty, it will return all data.
 * If the keyword starts with tag:, it will search by tag.
 * If the keyword starts with lang:, it will search by language.
 * If the keyword not empty and not starts with tag:, it will search by name/tags.
 *
 * @param keyword the keyword to search
 */
function search(
  keyword: string,
  tags: string[],
  groups: string[],
  langs: string[]
) {
  if (
    !keyword &&
    tags.length === 0 &&
    groups.length === 0 &&
    langs.length === 0
  ) {
    return data;
  }
  return data.filter((item) => {
    let check = true;
    if (keyword.startsWith("tag:")) {
      const searchTag = keyword.substring(4);
      if (searchTag) {
        check =
          check &&
          item.tags.some((t) =>
            t.toLowerCase().includes(searchTag.toLowerCase())
          );
      }
    } else if (keyword.startsWith("lang:")) {
      const searchLang = keyword.substring(5);
      if (searchLang) {
        check =
          check &&
          !!item.language?.toLowerCase().includes(searchLang.toLowerCase());
      }
    } else if (keyword) {
      check = check && item.name.toLowerCase().includes(keyword.toLowerCase());
    }
    if (check && tags.length > 0) {
      check = check && item.tags.some((t) => tags.includes(t));
    }
    if (check && groups.length > 0) {
      check = check && !!item.group && groups.includes(item.group);
    }
    if (check && langs.length > 0) {
      check = check && !!item.language && langs.includes(item.language);
    }

    return check;
  });
}

const useData = create<State & Action>((set) => ({
  searchText: "",
  searchData: data,
  selectedTags: [],
  selectedLangs: [],
  selectedGroups: [],

  setSearchText: (text: string) => {
    set({ searchText: text });
    set((state) => ({
      searchData: search(
        text,
        state.selectedTags,
        state.selectedGroups,
        state.selectedLangs
      ),
    }));
  },
  toSearch: () => {
    set((state) => {
      const result = search(
        state.searchText,
        state.selectedTags,
        state.selectedGroups,
        state.selectedLangs
      );
      return { searchData: result };
    });
  },
  selectTag: (tag: string) => {
    set((state) => {
      const tags = state.selectedTags.includes(tag)
        ? state.selectedTags.filter((t) => t !== tag)
        : [...state.selectedTags, tag];
      const data = search(
        state.searchText,
        tags,
        state.selectedGroups,
        state.selectedLangs
      );
      return { selectedTags: tags, searchData: data };
    });
  },
  selectLang: (lang: string) => {
    set((state) => {
      const langs = state.selectedLangs.includes(lang)
        ? state.selectedLangs.filter((t) => t !== lang)
        : [...state.selectedLangs, lang];
      const data = search(
        state.searchText,
        state.selectedTags,
        state.selectedGroups,
        langs
      );
      return { selectedLangs: langs, searchData: data };
    });
  },
  selectGroup: (group: string) => {
    set((state) => {
      const groups = state.selectedGroups.includes(group)
        ? state.selectedGroups.filter((t) => t !== group)
        : [...state.selectedGroups, group];
      const data = search(
        state.searchText,
        state.selectedTags,
        groups,
        state.selectedLangs
      );
      return { selectedGroups: groups, searchData: data };
    });
  },
  clearFilters: () => {
    set((state) => {
      const data = search(state.searchText, [], [], []);
      return {
        selectedTags: [],
        selectedLangs: [],
        selectedGroups: [],
        searchData: data,
      };
    });
  },
}));

export { tags };

export default useData;
