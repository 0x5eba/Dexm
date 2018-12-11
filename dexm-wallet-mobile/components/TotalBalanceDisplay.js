import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import AccentContainer from "../components/AccentContainer";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";

export default function TotalBalanceDisplay({ balance }) {
  return (
    <AccentContainer height={26 * Layout.spacing} waveHeight={23}>
      <View style={styles.accentContainer}>
        <FormattedMessage id="my-wallets.total-balance">
          {msg => <Text style={styles.balanceTitle}>{msg}</Text>}
        </FormattedMessage>
        <Text style={styles.balanceValue}>{balance} ⅅ</Text>
      </View>
    </AccentContainer>
  );
}

const styles = StyleSheet.create({
  accentContainer: {
    flex: 1,
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    justifyContent: "center"
  },
  balanceTitle: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 24
  },
  balanceValue: {
    alignSelf: "flex-end",
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 40
  }
});
