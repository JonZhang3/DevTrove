import { languages, groups } from "./common";

export type Language = (typeof languages)[number];

export type Group = (typeof groups)[number];

export interface ProjectItemType {
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
  tags: Array<string>;
  articles: Array<string>;
  notes: Array<string>;
}
