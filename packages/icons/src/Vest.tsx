import { IconProps } from "./types";
import defaultProps from "./defaultProps";

export default function Vest({
  size = defaultProps.size,
  color = defaultProps.color,
  strokeWidth = defaultProps.strokeWidth,
  pure,
  wordmark,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 270 270"
      width={size}
      height={size}
      {...rest}
    >
      <defs>
        <linearGradient
          id="a"
          x1="30.11"
          y1="63.52"
          x2="234.97"
          y2="63.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d8d8d8" />
          <stop offset="1" stopColor="#e5e5e5" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="48.25"
          y1="-22.05"
          x2="210.89"
          y2="159.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#333" />
          <stop offset="1" stopColor="#1e1e1e" />
        </linearGradient>
      </defs>
      <path
        d="M227.47,8.37,139.66,69.93a8.09,8.09,0,0,1-9.32,0L42.53,8.37c-7.08-5-15.94,3.06-11.76,10.63C53.83,60.73,135,120.2,135,120.2S216.17,60.73,239.23,19C243.41,11.43,234.55,3.41,227.47,8.37Z"
        style={{ fill: "url(#a)" }}
      />
      <path
        d="M236.64,5.17,141.09,113.31a8.13,8.13,0,0,1-12.18,0L33.36,5.17A8.13,8.13,0,0,0,20.23,6.49c-7.66,13.28-8.25,14.3-18,31.14a8.12,8.12,0,0,0,0,8.13L128,263.51a8.13,8.13,0,0,0,14.08,0L267.75,45.76a8.12,8.12,0,0,0,0-8.13c-9.73-16.84-10.32-17.86-18-31.14A8.13,8.13,0,0,0,236.64,5.17Z"
        style={{ fill: "url(#b)" }}
      />
    </svg>
  );
}
