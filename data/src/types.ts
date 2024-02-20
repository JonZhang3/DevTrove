import { languages, groups, tags } from "./common";

export type Language = (typeof languages)[number];

export type Group = (typeof groups)[number];

export type Tag = (typeof tags)[number];

export interface LibraryItemType {
  name: string;
  logo?: string;
  language?: Language;
  group?: Group;
  description: string;
  author?: string;
  author_github?: string;
  homepage?: string;
  source?: "READED" | "UNREAD";
  package?: "npm" | "maven";
  code?: string;
  tags: Array<Tag>;
  articles?: Array<string>;
  notes?: Array<string>;
  [key: string]: any;
}

export interface TechStackType {
  stack: Array<{ title: string; key: string }>;
  [key: string]: Array<LibraryItemType> | Array<{ title: string; key: string }>;
}
