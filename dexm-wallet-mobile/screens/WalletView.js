import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import AccentContainer from "../components/AccentContainer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import SendIcon from "../icons/SendIcon";
import ReceiveIcon from "../icons/ReceiveIcon";
import BackButton from "../components/BackButton";

import WalletActivityContainer from "../containers/WalletActivityContainer";
import WalletInfoDisplayContainer from "../containers/WalletInfoDisplayContainer";

export default class WalletView extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const walletId = this.props.navigation.getParam("walletId", null);

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <AccentContainer height={55 * Layout.spacing} waveHeight={23}>
            <BackButton
              style={styles.backButton}
              labelId="my-wallets.title"
              onClick={() => navigation.pop()}
            />
            <View style={styles.accentContainer}>
              <WalletInfoDisplayContainer walletId={walletId} />
              <Divider accent />
              <View style={styles.actionButtonsContainer}>
                <Button
                  style={styles.actionButton}
                  labelId="wallet-view.receive"
                  variant="outlined"
                  inverted
                  icon={<ReceiveIcon receive color={Colors.lightColor} />}
                  onClick={() =>
                    navigation.push("ReceiveMoney", {
                      walletId
                    })
                  }
                />
                <Button
                  style={styles.actionButton}
                  labelId="wallet-view.send"
                  variant="filled"
                  inverted
                  icon={<SendIcon color={Colors.lightColor} />}
                  onClick={() =>
                    navigation.push("SendMoney", {
                      walletId
                    })
                  }
                />
              </View>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <ContentTitle titleId="wallet-view.title" />
            <View style={styles.list}>
              <WalletActivityContainer walletId={walletId} />
            </View>
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
  backButton: {
    marginTop: Layout.spacing * 2
  },
  content: {
    margin: Layout.sideMargin
  },
  actionButtonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: Layout.spacing * 2
  },
  actionButton: {
    marginLeft: Layout.spacing * 2
  },
  list: {
    marginLeft: Layout.spacing,
    marginRight: Layout.spacing
  }
});
