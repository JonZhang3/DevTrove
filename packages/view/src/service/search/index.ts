import { libraryData } from "data";
import { useData } from "@/store";

function npmSearch(text: string) {
  window.open(`https://www.npmjs.com/search?q=${text}`, "_blank");
}

function mavenSearch(text: string) {
  window.open(`https://central.sonatype.com/search?q=${text}`, "_blank");
}

function rustCrateSearch(text: string) {
  window.open(`https://crates.io/search?q=${text}`, "_blank");
}

export function search(
  keyword: string,
  tags: string[],
  groups: string[],
  langs: string[]
) {
  if (keyword) {
    if (keyword.startsWith("npm:")) {
      const searchText = keyword.substring(4);
      npmSearch(searchText);
      return;
    } else if (keyword.startsWith("mvn:")) {
      const searchText = keyword.substring(4);
      mavenSearch(searchText);
      return;
    } else if (keyword.startsWith("cargo:")) {
      const searchText = keyword.substring(6);
      rustCrateSearch(searchText);
      return;
    }
  }
  if (
    !keyword &&
    tags.length === 0 &&
    groups.length === 0 &&
    langs.length === 0
  ) {
    useData.setState({ searchData: libraryData });
    return;
  }
  const result = libraryData.filter((item) => {
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
  useData.setState({ searchData: result });
}
