import IconProps from "./type";

export default function EnterIcon({ size = 15, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <g
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m9 10l-5 5l5 5"></path>
        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
      </g>
    </svg>
  );
}
