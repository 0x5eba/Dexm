import * as React from "react";
import { connect } from "react-redux";

import ActivityListItem from "../components/ActivityListItem";

class WalletActivityContainer extends React.PureComponent {
  render() {
    const { wallets, walletId } = this.props;
    const wallet = wallets && wallets.find(wallet => walletId === wallet.id);

    return (
      <React.Fragment>
        {(wallet &&
          wallet.activity &&
          wallet.activity.length > 0 &&
          wallet.activity.map((item, i) => (
            <ActivityListItem
              first={i === 0}
              last={i === wallet.activity.length - 1}
              key={item.description + item.recipientid + item.timestamp}
              description={item.description}
              amount={item.amount}
              recipient={item.recipientDescription}
              date={item.timestamp}
            />
          ))) ||
          null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletActivityContainer);
