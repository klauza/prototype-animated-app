import * as React from "react";

function SvgSmiley(props) {
  return (
    <svg width={295.042} height={294.975} viewBox="0 0 295.042 294.975" {...props}>
      <defs>
        <linearGradient
          id="smiley_svg__a"
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
          id="smiley_svg__b"
          x1={0.5}
          y1={1.039}
          x2={0.5}
          y2={0.047}
          xlinkHref="#smiley_svg__a"
        />
      </defs>
      <g transform="translate(-435.065 100.951)">
        <circle
          data-name="Ellipse 221"
          cx={147.487}
          cy={147.487}
          r={147.487}
          transform="translate(435.132 -100.951)"
          fill="#6c63ff"
        />
        <ellipse
          data-name="Ellipse 222"
          cx={15.294}
          cy={20.032}
          rx={15.294}
          ry={20.032}
          transform="translate(527.813 -2.084)"
          fill="#444053"
        />
        <ellipse
          data-name="Ellipse 223"
          cx={15.294}
          cy={20.032}
          rx={15.294}
          ry={20.032}
          transform="translate(606.839 -2.084)"
          fill="#444053"
        />
        <path
          data-name="Path 836"
          d="M677.667 80.954c0 28.756-48.037 77.2-96.505 77.2s-94.66-49.534-94.66-78.295 45.212-2.457 93.7-2.457 97.465-25.21 97.465 3.552z"
          fill="#444053"
        />
        <path
          data-name="Path 837"
          d="M501.752 85.868s87.125 19.391 160.324.545c0 0 8.959 0 2.84 10.355a16.489 16.489 0 01-6.693 6.277c-14.103 7.213-66.353 28.513-149.882 1.344a16.427 16.427 0 01-10.843-11.106c-.957-3.557-.541-6.925 4.254-7.415z"
          fill="#f6f8fb"
        />
        <path
          data-name="Path 838"
          d="M510.147-63.259s-44.428 28.407-44.062 72.82 44.062-72.82 44.062-72.82z"
          opacity={0.05}
        />
        <path
          data-name="Path 892"
          d="M255.565 322.937l-.535-.4a1.143 1.143 0 01.22.378z"
          transform="translate(181.14 -359.094)"
          fill="url(#smiley_svg__a)"
        />
        <path
          data-name="Path 893"
          d="M253.155 321.737h.32l-.3-.225h.081l-.535-.392a1.143 1.143 0 01.215.373h.12a1.052 1.052 0 01.099.244z"
          transform="translate(182.345 -358.353)"
          fill="url(#smiley_svg__b)"
        />
        <path
          data-name="Path 920"
          d="M436.743-34.732l-.521-.392a1.142 1.142 0 01.215.373z"
          opacity={0.1}
        />
      </g>
    </svg>
  );
}

export default SvgSmiley;
