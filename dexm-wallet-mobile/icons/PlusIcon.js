import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function PlusIcon({ color, ...rest }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 22 22">
      <Path
        d="M13,2A11,11,0,1,0,24,13,11,11,0,0,0,13,2Zm5.5,12.1H14.1v4.4H11.9V14.1H7.5V11.9h4.4V7.5h2.2v4.4h4.4Z"
        transform="translate(-2 -2)"
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
