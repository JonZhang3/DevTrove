import { Boxes } from "lucide-react";
import type IconProps from "@/icons/type";

export default function GroupIcon({ size = 15, className }: IconProps) {
  return <Boxes size={size} strokeWidth={1} className={className} />;
}
