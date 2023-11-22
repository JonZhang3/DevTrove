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
};

type Action = {
  setSearchText: (text: string) => void;
  toSearch: () => void;
  selectTag: (tag: string) => void;
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
function search(keyword: string, tags: string[]) {
  if (!!keyword || tags.length === 0) {
    return data;
  }
  if (keyword.startsWith("tag:")) {
    const searchTag = keyword.substring(4);
    return data.filter((item) =>
      item.tags.some(
        (t) =>
          (!!searchTag && t.toLowerCase().includes(searchTag.toLowerCase())) ||
          tags.includes(t)
      )
    );
  }
  if (keyword.startsWith("lang:")) {
    const searchLang = keyword.substring(5);
    return data.filter(
      (item) =>
        (!!searchLang &&
          item.language?.toLowerCase().includes(searchLang.toLowerCase())) ||
        item.tags.some((t) => tags.includes(t))
    );
  }
  return data.filter((item) => {
    const kmatch =
      !!keyword && item.name.toLowerCase().includes(keyword.toLowerCase());
    const tagmatch = item.tags.some((t) => tags.includes(t));
    return kmatch || tagmatch;
  });
}

const useData = create<State & Action>((set) => ({
  searchText: "",
  searchData: data,
  selectedTags: [],

  setSearchText: (text: string) => set({ searchText: text }),
  toSearch: () => {
    set((state) => {
      const searchText = state.searchText;
      const tags = state.selectedTags;
      const result = search(searchText, tags);
      return { searchData: result };
    });
  },
  selectTag: (tag: string) => {
    set((state) => {
      const tags = state.selectedTags.includes(tag)
        ? state.selectedTags.filter((t) => t !== tag)
        : [...state.selectedTags, tag];
      const data = search(state.searchText, tags);
      return { selectedTags: tags, searchData: data };
    });
  },
}));

export { tags };

export default useData;
