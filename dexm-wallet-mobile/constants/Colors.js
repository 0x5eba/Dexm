import React from "react";
import { Svg } from "expo";

const { LinearGradient, Stop } = Svg;

export default {
  lightColor: "#FFFCFE",
  accentColor: "#701547",
  selectColor: "#70154722",
  textColor: "#330A20",
  positiveColor: "#19870B",
  negativeColor: "#BD0000",
  accentGradient: ({ id }) => (
    <LinearGradient id={id} x1={0} x2={0} y1={0} y2={"100%"}>
      <Stop offset="0" stopColor="rgb(149,28,93)" stopOpacity="1" />
      <Stop offset="0.537" stopColor="rgb(183,62,150)" stopOpacity="1" />
      <Stop offset="1" stopColor="rgb(166,33,194)" stopOpacity="1" />
    </LinearGradient>
  )
};
