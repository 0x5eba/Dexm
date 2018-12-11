import * as React from "react";
import { connect } from "react-redux";

import WalletListItem from "../components/WalletListItem";

class WalletsListContainer extends React.PureComponent {
  render() {
    const { wallets, onSelectWallet } = this.props;

    return (
      <React.Fragment>
        {wallets && wallets.length > 0
          ? wallets.map((item, i) => (
              <WalletListItem
                first={i === 0}
                key={item.name}
                name={item.name}
                balance={item.activity.reduce(
                  (sum, activity) => sum + activity.amount,
                  0
                )}
                onOpen={() => onSelectWallet(item.id)}
              />
            ))
          : null}
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
)(WalletsListContainer);
