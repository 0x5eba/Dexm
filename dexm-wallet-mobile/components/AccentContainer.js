import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Svg } from "expo";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { Defs, Path, G, Rect } = Svg;

export default class AccentContainer extends React.Component {
  render() {
    const { height, waveHeight, children } = this.props;
    const width = Layout.window.width;
    const xScale = 1.2;
    const diff = width * xScale - width;

    return (
      <React.Fragment>
        <Svg viewBox={`0 0 ${width} ${height}`} {...{ width, height }}>
          <Defs>
            <Colors.accentGradient id="accentGradient" />
          </Defs>
          <G>
            <Rect fill="url(#accentGradient)" {...{ width, height }} />
            <G transform={`scale(${xScale} 1) translate(${-diff / 2} 0)`}>
              <Path
                fill={Colors.lightColor}
                d={`M ${0} ${height - waveHeight}
                  Q ${width / 4} ${height}
                  ${width / 2} ${height - waveHeight}
                  Q ${(width / 4) * 3} ${height - waveHeight * 2}
                  ${width} ${height - waveHeight}
                  L ${width} ${height}
                  L ${0} ${height}
                  Z`}
              />
              <Path
                fill={Colors.lightColor}
                opacity="0.5"
                d={`M ${0} ${height - waveHeight}
                  Q ${width / 4} ${height - waveHeight * 2}
                  ${width / 2} ${height - waveHeight}
                  Q ${(width / 4) * 3} ${height}
                  ${width} ${height - waveHeight}
                  L ${width} ${height}
                  L ${0} ${height}
                  Z`}
              />
            </G>
          </G>
        </Svg>
        <SafeAreaView style={styles.content} height={height - waveHeight * 2}>
          {children}
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    width: Layout.window.width,
    top: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
  },
  safeArea: {
    flex: 1
  }
});
