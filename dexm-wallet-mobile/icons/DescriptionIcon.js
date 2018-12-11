import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function DescriptionIcon({ color, back, ...rest }) {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14">
      <Path
        d="M14,17H4v2H14Zm6-8H4v2H20ZM4,15H20V13H4ZM4,5V7H20V5Z"
        transform="translate(-4 -5)"
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
