import React from "react";
import { Svg } from "expo";

const { Path } = Svg;

export default function TrendIcon({ color, size, down, ...rest }) {
  const s = size || 12;
  const d = s / 4;

  return (
    <Svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      <Path
        d={
          down
            ? `M0,${s / 2 - d} L${s},${s / 2 - d} L${s / 2},${s / 2 + d} Z`
            : `M0,${s / 2 + d} L${s},${s / 2 + d} L${s / 2},${s / 2 - d} Z`
        }
        fill={color}
        {...rest}
      />
    </Svg>
  );
}
