import * as DevIcons from "./src/dev";
import { default as EnterIcon } from "./src/Enter";
import { default as ProseMirrorIcon } from "./src/ProseMirror";
import { default as VestIcon } from "./src/Vest";
import { default as ReactFlowIcon } from "./src/ReactFlow";
import { default as UnoCSSIcon } from "./src/UnoCSS";
import { default as TablerIconsIcon } from "./src/TablerIcons";
import { default as StylexIcon } from "./src/Stylex";
import { default as VueUseIcon } from "./src/VueUse";
import { default as PoetryIcon } from "./src/Poetry";
import { default as FeatherIcon } from "./src/Feather";
import { default as PackageIcon } from "./src/Package";
import { default as Package2Icon } from "./src/Package2";
import { default as WavesIcon } from "./src/Waves";
import { default as CodeIcon } from "./src/Code";

import { IconProps } from "./src/types";

export const Icons = {
  ...DevIcons,
  EnterIcon,
  ProseMirrorIcon,
  VestIcon,
  ReactFlowIcon,
  UnoCSSIcon,
  TablerIconsIcon,
  StylexIcon,
  VueUseIcon,
  PoetryIcon,
  FeatherIcon,
  PackageIcon,
  Package2Icon,
  WavesIcon,
  CodeIcon,
} as { [key: string]: React.FC<IconProps> };
