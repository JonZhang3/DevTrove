import { Tags } from "lucide-react";
import type IconProps from "@/icons/type";

export default function TagsIcon({ size = 15, ...rest }: IconProps) {
  return <Tags size={size} strokeWidth={1} {...rest} />;
}
