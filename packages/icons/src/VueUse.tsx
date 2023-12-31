import { IconProps } from "./types";
import defaultProps from "./defaultProps";

export default function VueUse({
  size = defaultProps.size,
  color,
  strokeWidth,
  pure,
  wordmark,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width={size}
      height={size}
      {...rest}
    >
      <defs></defs>
      <path
        fill="#35495e"
        d="M735.07,67.05V531.58c0,129.83-105.24,235.07-235.07,235.07S264.93,661.41,264.93,531.58V67.05h166.3V531.58a68.77,68.77,0,1,0,137.54,0V67.05Z"
      />
      <path
        fill="#41b883"
        d="M901.36,67.05V531.58C901.36,753.25,721.67,933,500,933S98.64,753.25,98.64,531.58V67.05H264.93V531.58c0,129.83,105.25,235.07,235.07,235.07S735.07,661.41,735.07,531.58V67.05Z"
      />
    </svg>
  );
}
