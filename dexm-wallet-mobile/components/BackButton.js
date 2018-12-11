import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import ChevronIcon from "../icons/ChevronIcon";
import Colors from "../constants/Colors";

export default function BackButton({ labelId, onClick, ...rest }) {
  return (
    <View {...rest}>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.container}>
          <ChevronIcon back color={Colors.lightColor} />
          <FormattedMessage id={labelId}>
            {msg => <Text style={styles.label}>{msg}</Text>}
          </FormattedMessage>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Layout.spacing * 1.5,
    marginTop: Layout.spacing * 1,
    marginBottom: Layout.spacing * 1,
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    ...Fonts.defaultAccent,
    fontWeight: "500",
    fontSize: 17,
    marginLeft: Layout.spacing
  }
});
