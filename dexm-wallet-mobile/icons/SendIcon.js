import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function SendIcon({ color, size, ...rest }) {
  return (
    <Svg width={size || 22} height={size || 22} viewBox="0 0 22.627 22.627">
      <Path
        d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z"
        transform="translate(-5.657 11.314) rotate(-45)"
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
