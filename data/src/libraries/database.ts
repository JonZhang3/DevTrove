import { LibraryItemType } from "../types";

export default [
  {
    name: "Codis",
    logo: "https://github.com/CodisLabs/codis/blob/master/doc/pictures/logo-1.png?raw=true",
    description:
      "Codis is a proxy based high performance Redis cluster solution written in Go.",
    group: "Database",
    author: "CodisLabs",
    author_github: "https://github.com/CodisLabs",
    homepage: "https://github.com/CodisLabs/codis",
    language: "Golang",
    source: "UNREAD",
    tags: ["Database", "Golang", "Cache", "Redis"],
    articles: [],
    notes: [],
  },
  {
    name: "mysqlburst",
    description:
      "A mysql pressure test tool that makes large quantity of short connections.",
    group: "Database",
    author: "Xie Zhenye",
    author_github: "https://github.com/xiezhenye",
    homepage: "https://github.com/xiezhenye/mysqlburst",
    language: "Golang",
    source: "UNREAD",
    tags: ["Database", "Golang", "MySQL", "Test"],
    articles: [],
    notes: [],
  },
] as Array<LibraryItemType>;
