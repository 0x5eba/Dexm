import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function PersonIcon({ color, back, ...rest }) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16">
      <Path
        d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
        transform="translate(-4 -4)"
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
