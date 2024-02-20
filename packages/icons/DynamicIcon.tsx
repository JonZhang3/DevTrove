import { useMemo, FC } from "react";
import { IconProps } from "./src/types";
import { Icons } from "./icons";
export interface DynamicIconProps extends IconProps {
  name?: string;
  fallback?: React.FC;
}

export default function DynamicIcon(props: DynamicIconProps) {
  const { name, fallback, ...rest } = props;
  const Cmp = useMemo<FC<IconProps>>(() => {
    let result = name && Icons[name];
    if (!result) {
      result = fallback || (() => null);
    }
    return result;
  }, [name, fallback]);
  return <Cmp {...rest} />;
}
