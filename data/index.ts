import frontend from "./src/libraries/frontend";
import backend from "./src/libraries/backend";
import tool from "./src/libraries/tool";
import database from "./src/libraries/database";
import bigdata from "./src/libraries/bigdata";
import ai from "./src/libraries/ai";

import { techStacks } from "./src/common";
import ReactStack from "./src/stack/react";
import BigDataStack from "./src/stack/bigdata";
import { TechStackType } from "./src/types";

export * from "./src/common";
export type * from "./src/types";

export const libraryData = [
  ...frontend,
  ...backend,
  ...tool,
  ...database,
  ...bigdata,
  ...ai,
];

export const tectStackData = {
  React: ReactStack,
  BigData: BigDataStack,
} as { [key: (typeof techStacks)[number]]: TechStackType };
