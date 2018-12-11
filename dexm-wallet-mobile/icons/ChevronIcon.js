import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function ChevronIcon({ color, back, ...rest }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 14.142 14.142">
      <Path
        d="M8,10V2H0V0H10V10Z"
        transform={`translate(${back ? "7.071 14.142" : "7.071"}) rotate(${
          back ? -135 : 45
        })`}
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
