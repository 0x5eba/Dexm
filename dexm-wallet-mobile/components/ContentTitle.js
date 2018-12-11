import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Fonts from "../constants/Fonts";
import Layout from "../constants/Layout";

export default function ContentTitle({ title, titleId, children }) {
  return (
    <View style={styles.container}>
      {titleId ? (
        <FormattedMessage id={titleId}>
          {msg => <Text style={styles.title}>{msg}</Text>}
        </FormattedMessage>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Layout.spacing * 3
  },
  title: {
    ...Fonts.default,
    fontWeight: "600",
    fontSize: 25,
    flex: 1
  }
});
