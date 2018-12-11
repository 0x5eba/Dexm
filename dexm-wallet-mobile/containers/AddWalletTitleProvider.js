import * as React from "react";
import { connect } from "react-redux";
import {
  STATE_NAME,
  STATE_IMPORT,
  STATE_PASSWORD,
  STATE_AUTH
} from "../reducers/addWalletForm";
import { FormattedMessage } from "react-intl";

class AddWalletTitleProvider extends React.PureComponent {
  render() {
    const { currentState, children, authMethod } = this.props;

    switch (currentState) {
      case STATE_NAME:
        return (
          <FormattedMessage id="add-wallet.name">{children}</FormattedMessage>
        );
      case STATE_IMPORT:
        return (
          <FormattedMessage id="add-wallet.import">{children}</FormattedMessage>
        );
      case STATE_PASSWORD:
        return (
          <FormattedMessage id="add-wallet.password">
            {children}
          </FormattedMessage>
        );
      case STATE_AUTH:
        return (
          <FormattedMessage id={`add-wallet.${authMethod}`}>
            {children}
          </FormattedMessage>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({
  currentState: state.addWalletForm.currentState
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWalletTitleProvider);
