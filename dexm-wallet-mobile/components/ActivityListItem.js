import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Svg } from "expo";
const { Line, Circle } = Svg;

import Divider from "../components/Divider";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

const ActivityElementJoiner = ({ first, last }) => (
  <View style={styles.joiner}>
    <Svg width={14} height={64} viewBox="0 0 14 64">
      <Line
        x1="7"
        y1={first ? "24" : "0"}
        x2="7"
        y2={last ? "24" : "64"}
        stroke={Colors.selectColor}
        strokeWidth="1"
      />
      <Circle
        cx="7"
        cy="22"
        r="6"
        stroke={Colors.accentColor}
        strokeWidth="1"
        fill={Colors.lightColor}
      />
    </Svg>
  </View>
);

const Touchable =
  Platform.OS == "ios" ? TouchableOpacity : TouchableNativeFeedback;

export default function ActivityListItem({
  description,
  date,
  amount,
  recipient,
  onClick,
  first,
  last
}) {
  const sign = amount >= 0 ? "+ " : "- ";
  const fromToId = amount >= 0 ? "wallet-view.from" : "wallet-view.to";

  return (
    <Touchable onPress={onClick}>
      <View style={styles.container}>
        <ActivityElementJoiner {...{ first, last }} />
        <View style={styles.spacer}>
          {!first && <Divider />}
          <View style={[styles.spacer, styles.justify]}>
            <View style={styles.row}>
              <View style={styles.spacer}>
                <Text style={styles.description}>{description}</Text>
              </View>
              <Text
                style={[
                  styles.value,
                  {
                    color:
                      amount >= 0 ? Colors.positiveColor : Colors.negativeColor
                  }
                ]}
              >
                {sign}
                {Math.abs(amount || 0).toFixed(2)} ⅅ
              </Text>
            </View>
            <View style={styles.row}>
              <View style={[styles.spacer, styles.row]}>
                <Text style={styles.recipientLabel}>
                  <FormattedMessage id={fromToId}>
                    {msg => msg + " "}
                  </FormattedMessage>
                </Text>
                <Text style={styles.recipient}>{recipient}</Text>
              </View>
              <Text style={styles.recipient}>
                <FormattedDate value={date}>{msg => msg + " "}</FormattedDate>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Layout.spacing * 8
  },
  joiner: {
    marginRight: Layout.spacing * 3
  },
  align: {
    alignItems: "center"
  },
  justify: {
    justifyContent: "center"
  },
  spacer: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  description: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21,
    lineHeight: Layout.spacing * 3
  },
  value: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 15
  },
  recipientLabel: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 12
  },
  recipient: {
    ...Fonts.default,
    fontWeight: "600",
    fontSize: 12
  }
});
