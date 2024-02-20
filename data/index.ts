import frontend from "./src/libraries/frontend";
import backend from "./src/libraries/backend";
import tool from "./src/libraries/tool";
import database from "./src/libraries/database";
import bigdata from "./src/libraries/bigdata";

import { techStacks } from "./src/common";
import ReactStack from "./src/stack/react";
import { TechStackType } from "./src/types";

export * from "./src/common";
export type * from "./src/types";

export const libraryData = [
  ...frontend,
  ...backend,
  ...tool,
  ...database,
  ...bigdata,
];

export const tectStackData = {
  React: ReactStack,
} as { [key: (typeof techStacks)[number]]: TechStackType };
