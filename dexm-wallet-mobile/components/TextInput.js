import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput as ReactTextInput
} from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

export default function TextInput({
  label,
  labelId,
  variant,
  icon,
  value,
  onChange,
  button,
  numeric,
  style,
  ...rest
}) {
  const containerStyle =
    variant === "filled" ? styles.containerFilled : styles.containerOutlined;
  const valueStyle = variant === "filled" ? styles.valueAccent : styles.value;

  return (
    <View {...{ style }}>
      {labelId ? (
        <FormattedMessage id={labelId}>
          {msg => <Text style={styles.label}>{msg}</Text>}
        </FormattedMessage>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
      <View style={containerStyle}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <ReactTextInput
          style={valueStyle}
          value={value}
          onChangeText={onChange}
          keyboardType={numeric && "numeric"}
          underlineColorAndroid={"#00000000"}
          {...rest}
        />
      </View>
    </View>
  );
}

const commonContainer = {
  flexDirection: "row",
  alignItems: "center",
  height: Layout.spacing * 5
};

const commonValue = {
  fontWeight: "500",
  fontSize: 15,
  marginLeft: Layout.spacing * 2,
  marginRight: Layout.spacing * 2,
  flex: 1
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
  containerFilled: {
    borderRadius: 4,
    backgroundColor: Colors.accentColor,
    ...commonContainer
  },
  valueAccent: {
    ...Fonts.defaultAccent,
    ...commonValue
  },
  value: {
    ...Fonts.default,
    ...commonValue
  },
  label: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 16
  },
  icon: {
    marginLeft: Layout.spacing * 2
  }
});
