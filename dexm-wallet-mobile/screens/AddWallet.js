import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import AccentContainer from "../components/AccentContainer";
import Button from "../components/Button";
import SendIcon from "../icons/SendIcon";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import DescriptionIcon from "../icons/DescriptionIcon";
import AddWalletTitleProvider from "../containers/AddWalletTitleProvider";

export default class AddWallet extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <AccentContainer height={28 * Layout.spacing} waveHeight={23}>
            <BackButton
              style={styles.backButton}
              labelId="add-wallet.back"
              onClick={() => navigation.pop()}
            />
            <View style={styles.accentContainer}>
              <View style={styles.titleLine}>
                <FormattedMessage id="add-wallet.add-wallet">
                  {msg => <Text style={styles.title}>{msg}</Text>}
                </FormattedMessage>
              </View>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <AddWalletTitleProvider authMethod={"fingerprint"}>
              {msg => <Text style={styles.actionTitle}>{msg}</Text>}
            </AddWalletTitleProvider>
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
  actionTitle: {
    ...Fonts.default,
    fontWeight: "600",
    fontSize: 22
  },
  content: {
    margin: Layout.sideMargin
  },
  formField: {
    marginBottom: Layout.spacing * 1.5
  },
  iconD: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21
  },
  actionButtonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: Layout.spacing * 2
  },
  actionButton: {
    marginLeft: Layout.spacing * 2
  }
});
