import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

export default function Button({
  label,
  labelId,
  variant,
  icon,
  onClick,
  inverted,
  ...rest
}) {
  const containerStyle =
    variant === "filled"
      ? styles.containerFilled
      : variant === "outlined" && inverted
        ? styles.containerOutlinedInverted
        : variant === "outlined"
          ? styles.containerOutlined
          : styles.container;
  const labelStyle =
    variant === "filled" || inverted ? styles.labelAccent : styles.label;

  const Touchable =
    Platform.OS == "ios" ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <View {...rest}>
      <Touchable onPress={onClick}>
        <View style={containerStyle}>
          {labelId ? (
            <FormattedMessage id={labelId}>
              {msg => <Text style={labelStyle}>{msg}</Text>}
            </FormattedMessage>
          ) : (
            <Text style={labelStyle}>{label}</Text>
          )}

          {icon && <View style={styles.icon}>{icon}</View>}
        </View>
      </Touchable>
    </View>
  );
}

const commonContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: Layout.spacing * 4,
  paddingLeft: Layout.spacing * 2,
  paddingRight: Layout.spacing * 2
};

const commonLabel = {
  lineHeight: Layout.spacing * 4,
  fontWeight: "500",
  fontSize: 15
};

const styles = StyleSheet.create({
  container: {
    ...commonContainer
  },
  containerOutlined: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    ...commonContainer
  },
  containerOutlinedInverted: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightColor,
    ...commonContainer
  },
  containerFilled: {
    borderRadius: 4,
    backgroundColor: Colors.accentColor,
    ...commonContainer
  },
  labelAccent: {
    ...Fonts.defaultAccent,
    ...commonLabel
  },
  label: {
    ...Fonts.default,
    ...commonLabel
  },
  icon: {
    marginLeft: Layout.spacing * 0.5
  }
});
