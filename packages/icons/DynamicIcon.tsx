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
    let result = Icons[name];
    if (!result) {
      result = fallback || "";
    }
    return result;
  }, [name]);
  return <Cmp {...rest} />;
}
