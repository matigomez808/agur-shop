
import * as React from "react";
const SVGCard = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={50}
    height={50}
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <path d="M1 10h22" />
  </svg>
);
export default SVGCard;
