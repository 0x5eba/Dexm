import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import DeltaDisplay from "./DeltaDisplay";

export default function WalletInfoDisplay({
  name,
  balance,
  revenues,
  expenses
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.walletTitle}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.balanceColumn}>
          <FormattedMessage id="wallet-info-display.balance">
            {msg => <Text style={styles.balanceTitle}>{msg}</Text>}
          </FormattedMessage>
          <Text style={styles.balanceValue}>{balance} ⅅ</Text>
        </View>
        <View style={styles.deltaColumn}>
          <DeltaDisplay
            titleId="wallet-info-display.revenues"
            value={revenues}
          />
          <DeltaDisplay
            titleId="wallet-info-display.expenses"
            value={expenses}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: Layout.spacing * 4
  },
  walletTitle: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 38,
    marginBottom: Layout.spacing * 2.5
  },
  balanceColumn: {
    flex: 1
  },
  deltaColumn: {},
  row: {
    flexDirection: "row"
  },
  balanceTitle: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 22
  },
  balanceValue: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 36
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
