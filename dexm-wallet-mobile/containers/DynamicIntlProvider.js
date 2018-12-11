import * as React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";

import { getLocaleMessages } from "../intl";

class DynamicIntlProvider extends React.Component {
  render() {
    const { children, locale } = this.props;

    return (
      <IntlProvider
        key={locale}
        locale={locale}
        messages={getLocaleMessages(locale)}
      >
        {children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.appConfig.locale
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicIntlProvider);
