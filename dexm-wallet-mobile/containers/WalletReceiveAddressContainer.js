import * as React from "react";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode";
import { StyleSheet, View, Text, Share } from "react-native";

import Button from "../components/Button";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";

class WalletReceiveAddressContainer extends React.PureComponent {
  render() {
    const { wallets, walletId } = this.props;
    const wallet = wallets && wallets.find(wallet => walletId === wallet.id);
    
    return wallet ? (
      <React.Fragment>
        <View style={styles.qr}>
          <QRCode
            value={wallet.id}
            size={Layout.spacing * 30}
            bgColor={Colors.lightColor}
            fgColor={Colors.accentColor}
          />
        </View>
        <Text style={styles.walletId}>{wallet.id}</Text>
        <Button
          style={styles.actionButton}
          labelId="receive-money.share"
          variant="filled"
          onClick={() =>
            Share.share({
              title: wallet.description,
              message: wallet.id,
              url: wallet.id
            })
          }
        />
      </React.Fragment>
    ) : null;
  }
}

const styles = StyleSheet.create({
  qr: {
    margin: Layout.spacing * 4
  },
  walletId: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21,
    fontStyle: "italic",
    marginBottom: Layout.spacing * 2
  },
  actionButton: {}
});

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletReceiveAddressContainer);
