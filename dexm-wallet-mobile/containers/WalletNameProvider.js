import * as React from "react";
import { connect } from "react-redux";

class WalletNameProvider extends React.PureComponent {
  render() {
    const { wallets, walletId, children } = this.props;
    const wallet = wallets && wallets.find(wallet => walletId === wallet.id);

    return wallet ? children(wallet.name) : null;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletNameProvider);
