import * as React from "react";

function SvgHome(props) {
  return (
    <svg width={127.2} height={155.66} viewBox="0 0 127.2 155.66" {...props}>
      <defs>
        <linearGradient
          id="home_svg__a"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.251} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.122} />
          <stop offset={1} stopColor="gray" stopOpacity={0.102} />
        </linearGradient>
        <linearGradient
          id="home_svg__b"
          x1={0.5}
          y1={1}
          x2={0.5}
          y2={0}
          xlinkHref="#home_svg__a"
        />
        <linearGradient
          id="home_svg__c"
          x1={0.5}
          y1={1}
          x2={0.5}
          y2={0}
          xlinkHref="#home_svg__a"
        />
      </defs>
      <g transform="translate(-2.24 -125.51)">
        <path data-name="Path 1133" d="M129.44 281.16z" fill="#eee" />
        <g data-name="Group 103">
          <path
            data-name="Rectangle 373"
            transform="translate(26.42 134.79)"
            fill="url(#home_svg__a)"
            d="M0 0h15.77v31.11H0z"
            opacity={0.7}
          />
        </g>
        <path
          data-name="Rectangle 374"
          fill="#535461"
          d="M26.85 135.22h14.91v30.68H26.85z"
        />
        <g data-name="Group 104">
          <path
            data-name="Path 1129"
            d="M113.35 281.17H17.9V164.41l48.14-1.07 47.31 1.07z"
            fill="url(#home_svg__b)"
            opacity={0.7}
          />
        </g>
        <path
          data-name="Path 1130"
          d="M112.29 281.17h-92.9V164.41l46.45-33.03 46.45 33.03z"
          fill="#fff"
        />
        <path
          data-name="Rectangle 375"
          fill="#535461"
          d="M54.12 241.96h23.44v39.2H54.12z"
        />
        <path
          data-name="Rectangle 376"
          opacity={0.5}
          d="M44.32 181.88h43.04v26.85H44.32z"
        />
        <path
          data-name="Rectangle 377"
          fill="#535461"
          d="M41.76 206.38h48.15v4.69H41.76z"
        />
        <g data-name="Group 105">
          <path
            data-name="Rectangle 378"
            d="M44.32 181.88h43.04v10.65H44.32z"
            opacity={0.1}
          />
        </g>
        <g data-name="Group 106">
          <path
            data-name="Path 1131"
            d="M118.53 174.29l-52.56-40.65-50.87 40.62-3.99-5 54.8-43.75 56.53 43.72z"
            fill="url(#home_svg__c)"
            opacity={0.7}
          />
        </g>
        <path
          data-name="Path 1132"
          d="M118.53 174.71l-52.56-40.65-50.87 40.62-3.99-4.99 54.8-43.76 56.53 43.73z"
        />
        <circle
          data-name="Ellipse 236"
          cx={1.7}
          cy={1.7}
          r={1.7}
          transform="translate(72.45 259.87)"
          fill="#e0e0e0"
        />
      </g>
    </svg>
  );
}

export default SvgHome;
