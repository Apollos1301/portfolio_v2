import * as React from "react";
const SVGComponent = (props) => (
  <svg
    id="visual"
    viewBox="0 0 960 540"
    className="w-full h-screen opacity-35"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation={163} result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <rect width={960} height={540} fill="#1E1E1E" />
    <g filter="url(#blur1)">
      <circle cx={83} cy={41} fill="#005b44" r={363} />
      <circle cx={898} cy={229} fill="#1E1E1E" r={363} />
      <circle cx={572} cy={327} fill="#005b44" r={363} />
      <circle cx={127} cy={367} fill="#005b44" r={363} />
      <circle cx={351} cy={270} fill="#1E1E1E" r={363} />
      <circle cx={769} cy={468} fill="#005b44" r={363} />
    </g>
  </svg>
);
export default SVGComponent;
