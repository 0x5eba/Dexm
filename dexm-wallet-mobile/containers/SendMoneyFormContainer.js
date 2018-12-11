import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import PersonIcon from "../icons/PersonIcon";
import DescriptionIcon from "../icons/DescriptionIcon";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import {
  setDescription,
  setAmount,
  setRecipientDescription,
  setRecipientId
} from "../actions/sendMoneyFormActions";

class SendMoneyFormContainer extends React.PureComponent {
  render() {
    const {
      handleChangeDescription,
      handleChangeAmount,
      handleChangeRecipientDescription,
      handleChangeRecipientId,
      formState
    } = this.props;

    return (
      <React.Fragment>
        <TextInput
          style={styles.formField}
          labelId="send-money.description"
          value={String(formState.description)}
          onChange={handleChangeDescription}
          icon={<DescriptionIcon color={Colors.textColor} />}
        />
        <TextInput
          numeric
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.formField}
          labelId="send-money.amount"
          value={String(formState.amount)}
          onChange={handleChangeAmount}
          icon={<Text style={styles.iconD}>ⅅ</Text>}
        />
        <TextInput
          style={styles.formField}
          labelId="send-money.recipient-description"
          value={String(formState.recipientDescription)}
          onChange={handleChangeRecipientDescription}
          icon={<PersonIcon color={Colors.textColor} />}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.formField}
          labelId="send-money.recipient-id"
          value={String(formState.recipientId)}
          onChange={handleChangeRecipientId}
          icon={<PersonIcon color={Colors.textColor} />}
        />
        <View style={styles.actionButtonsContainer}>
          <Button
            style={styles.actionButton}
            labelId="send-money.contracts"
            variant="outlined"
            onClick={() => 0}
          />
          <Button
            style={styles.actionButton}
            labelId="send-money.send"
            variant="filled"
            onClick={() => 0}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: Layout.spacing * 2
  },
  actionButton: {
    marginLeft: Layout.spacing * 2
  },
  formField: {
    marginBottom: Layout.spacing * 1.5
  },
  iconD: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21
  }
});

const mapStateToProps = state => ({
  formState: state.sendMoneyForm
});

const mapDispatchToProps = dispatch => ({
  handleChangeDescription: value => dispatch(setDescription(value)),
  handleChangeAmount: value => dispatch(setAmount(value)),
  handleChangeRecipientDescription: value =>
    dispatch(setRecipientDescription(value)),
  handleChangeRecipientId: value => dispatch(setRecipientId(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMoneyFormContainer);
