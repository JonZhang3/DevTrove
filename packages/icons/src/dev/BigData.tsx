import { IconProps } from "../types";
import defaultProps from "../defaultProps";

export default function BigDataIcon({
  wordmark = false,
  pure = true,
  size = defaultProps.size,
  strokeWidth = defaultProps.strokeWidth,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
      <path d="M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12" />
      <path d="M4 15a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1" />
    </svg>
  );
}
