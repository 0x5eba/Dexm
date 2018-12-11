import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import TrendIcon from "../icons/TrendIcon";
import Colors from "../constants/Colors";

export default function DeltaDisplay({ titleId, value }) {
  const sign = value >= 0 ? "+ " : "- ";

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.trendIcon}>
          <TrendIcon color={Colors.lightColor} down={value < 0} />
        </View>
        <FormattedMessage id={titleId}>
          {msg => <Text style={styles.deltaTitle}>{msg}</Text>}
        </FormattedMessage>
      </View>
      <Text style={styles.deltaValue}>
        {sign}
        {Math.abs(value || 0).toFixed(2)} ⅅ
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Layout.spacing * 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  trendIcon: {
    margin: Layout.spacing
  },
  deltaTitle: {
    ...Fonts.defaultAccent,
    fontWeight: "500",
    fontSize: 17
  },
  deltaValue: {
    ...Fonts.defaultAccent,
    fontSize: 28
  }
});
