import type { IconProps } from "./types";
import defaultProps from "./defaultProps";

export default function Poetry({
  size = defaultProps.size,
  color,
  strokeWidth,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 448.17 560"
      width={size}
      height={size}
      {...rest}
    >
      <defs>
        <style>
          {`.cls-1{isolation:isolate;}
          .cls-2{fill:url(#radial-gradient);}
          .cls-3{fill:url(#radial-gradient-2);}
          .cls-4,.cls-5,.cls-6{mix-blend-mode:multiply;}
          .cls-4{fill:url(#linear-gradient);}
          .cls-5{fill:url(#linear-gradient-2);}
          .cls-6{fill:url(#linear-gradient-3);}
          .cls-7{mix-blend-mode:screen;fill:url(#radial-gradient-3);}`}
        </style>
        <radialGradient
          id="radial-gradient"
          cx="438.3"
          cy="639.01"
          r="569.94"
          gradientTransform="translate(0 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6877ec" />
          <stop offset="0.6" stopColor="#5362cf" />
          <stop offset="1" stopColor="#4352b9" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="65.64"
          cy="-16.21"
          r="746.46"
          gradientTransform="translate(0 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00d5ff" />
          <stop offset="0.38" stopColor="#00b8eb" />
          <stop offset="1" stopColor="#0080c5" />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="74.77"
          y1="67.3"
          x2="277.23"
          y2="512.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#294ca7" />
          <stop offset="0.48" stopColor="#96a7d4" />
          <stop offset="0.84" stopColor="#e1e6f3" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="-228.74"
          y1="-144.29"
          x2="451"
          y2="651.89"
          gradientTransform="translate(0 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6877ec" />
          <stop offset="0.29" stopColor="#97a1f2" />
          <stop offset="0.77" stopColor="#e2e4fb" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="-151.22"
          y1="-285.9"
          x2="450.08"
          y2="430.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8397cc" />
          <stop offset="0.15" stopColor="#97a8d4" />
          <stop offset="0.73" stopColor="#e2e6f3" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <radialGradient
          id="radial-gradient-3"
          cx="259.68"
          cy="-34.71"
          r="431.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" />
        </radialGradient>
      </defs>
      <title>logo-origami</title>
      <g className="cls-1">
        <g id="Layer_1" data-name="Layer 1">
          <path
            className="cls-2"
            d="M168.08,560A570.54,570.54,0,0,0,459.84,403.59L56.25,0V448.17Z"
            transform="translate(-56.25)"
          />
          <path
            className="cls-3"
            d="M56.25,448.17C303.77,448.17,504.42,247.52,504.42,0H56.25Z"
            transform="translate(-56.25)"
          />
          <path
            className="cls-4"
            d="M56.25,448.17h0L73.5,465.42c121.57-4.45,231.4-55.68,312-136.23l-12.29-12.28A446.8,446.8,0,0,1,56.25,448.17Z"
            transform="translate(-56.25)"
          />
          <path
            className="cls-5"
            d="M168.08,560A570.54,570.54,0,0,0,459.84,403.59L56.25,0V448.17Z"
            transform="translate(-56.25)"
          />
          <path
            className="cls-6"
            d="M459.84,403.59,56.25,0,423.14,437.13C435.83,426.46,448.12,415.31,459.84,403.59Z"
            transform="translate(-56.25)"
          />
          <path
            className="cls-7"
            d="M56.25,0,373.16,316.91q4.23-4.25,8.35-8.6Z"
            transform="translate(-56.25)"
          />
        </g>
      </g>
    </svg>
  );
}
