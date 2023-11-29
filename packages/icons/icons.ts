import * as DevIcons from "./src/dev";
import { default as EnterIcon } from "./src/Enter";
import { default as ProseMirrorIcon } from "./src/ProseMirror";
import { IconProps } from "./src/types";

export const Icons = {
  ...DevIcons,
  EnterIcon,
  ProseMirrorIcon,
} as { [key: string]: React.FC<IconProps> };
