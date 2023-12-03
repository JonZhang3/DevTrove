import * as DevIcons from "./src/dev";
import { default as EnterIcon } from "./src/Enter";
import { default as ProseMirrorIcon } from "./src/ProseMirror";
import { default as VestIcon } from "./src/Vest";
import { default as ReactFlowIcon } from "./src/ReactFlow";
import { default as UnoCSSIcon } from "./src/UnoCSS";
import { default as TablerIconsIcon } from "./src/TablerIcons";

import { IconProps } from "./src/types";

export const Icons = {
  ...DevIcons,
  EnterIcon,
  ProseMirrorIcon,
  VestIcon,
  ReactFlowIcon,
  UnoCSSIcon,
  TablerIconsIcon,
} as { [key: string]: React.FC<IconProps> };
