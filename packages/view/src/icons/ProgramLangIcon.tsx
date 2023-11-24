import { Binary } from "lucide-react";
import type IconProps from "@/icons/type";

export default function ProgramLangIcon({ size = 15, ...rest }: IconProps) {
  return <Binary size={size} strokeWidth={1} {...rest} />;
}
