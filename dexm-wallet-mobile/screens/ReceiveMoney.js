import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import AccentContainer from "../components/AccentContainer";
import ReceiveIcon from "../icons/ReceiveIcon";
import BackButton from "../components/BackButton";
import WalletNameProvider from "../containers/WalletNameProvider";
import WalletReceiveAddressContainer from "../containers/WalletReceiveAddressContainer";

export default class ReceiveMoney extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const walletId = this.props.navigation.getParam("walletId", null);

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <AccentContainer height={28 * Layout.spacing} waveHeight={23}>
            <BackButton
              style={styles.backButton}
              labelId="receive-money.back"
              onClick={() => navigation.pop()}
            />
            <View style={styles.accentContainer}>
              <View style={styles.titleLine}>
                <FormattedMessage id="receive-money.title">
                  {msg => <Text style={styles.title}>{msg}</Text>}
                </FormattedMessage>
                <ReceiveIcon
                  size={Layout.spacing * 7}
                  color={Colors.lightColor}
                />
              </View>
              <WalletNameProvider>
                {name => <Text style={styles.walletName}>{name}</Text>}
              </WalletNameProvider>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <WalletReceiveAddressContainer walletId={walletId} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    backgroundColor: Colors.lightColor
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
    marginBottom: Layout.endMargin
  },
  accentContainer: {
    flex: 1,
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    justifyContent: "center"
  },
  titleLine: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: Layout.spacing * 2
  },
  backButton: {
    marginTop: Layout.spacing * 2
    // marginBottom: Layout.spacing * 2.5
  },
  title: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 38
  },
  walletName: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 22
  },
  content: {
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    alignItems: "center"
  }
});
