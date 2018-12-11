import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  TouchableHighlight
} from "react-native";

import Fonts from "../constants/Fonts";
import Layout from "../constants/Layout";
import ChevronIcon from "../icons/ChevronIcon";
import Colors from "../constants/Colors";
import Divider from "./Divider";

const Touchable =
  Platform.OS == "ios" ? TouchableHighlight : TouchableNativeFeedback;

export default function WalletListItem({ name, balance, onOpen, first }) {
  return (
    <React.Fragment>
      {!first && <Divider />}
      <Touchable onPress={onOpen} underlayColor={Colors.selectColor}>
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.balance}>{balance} ⅅ</Text>
          <View style={styles.chevron}>
            <ChevronIcon color={Colors.textColor} />
          </View>
        </View>
      </Touchable>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: Layout.spacing * 7,
    paddingRight: Layout.spacing,
    paddingLeft: Layout.spacing
  },
  name: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 19,
    flex: 1
  },
  balance: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 15
  },
  chevron: {
    marginLeft: Layout.spacing
  }
});
