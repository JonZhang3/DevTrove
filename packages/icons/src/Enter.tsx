import { IconProps } from "./types";
import defaultProps from "./defaultProps";

export default function EnterIcon({
  size = defaultProps.size,
  color = defaultProps.color,
  strokeWidth = defaultProps.strokeWidth,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      {...rest}
      viewBox="0 0 24 24"
    >
      <g
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      >
        <path d="m9 10l-5 5l5 5"></path>
        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
      </g>
    </svg>
  );
}
