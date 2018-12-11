import * as React from "react";
import { connect } from "react-redux";

import WalletInfoDisplay from "../components/WalletInfoDisplay";

class WalletInfoDisplayContainer extends React.PureComponent {
  render() {
    const { wallets, walletId } = this.props;

    const wallet = wallets && wallets.find(wallet => walletId === wallet.id);
    const balance = wallet.activity.reduce(
      (sum, activity) => sum + activity.amount,
      0
    );
    const revenues = wallet.activity.reduce(
      (sum, activity) => (activity.amount > 0 ? sum + activity.amount : sum),
      0
    );
    const expenses = wallet.activity.reduce(
      (sum, activity) => (activity.amount < 0 ? sum + activity.amount : sum),
      0
    );

    return wallet ? (
      <WalletInfoDisplay
        name={wallet.name}
        balance={balance}
        revenues={revenues}
        expenses={expenses}
      />
    ) : null;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletInfoDisplayContainer);
