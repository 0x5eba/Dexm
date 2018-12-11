import { combineReducers } from "redux";

import appConfig from "./appConfig";
import wallets from "./wallets";
import sendMoneyForm from "./sendMoneyForm";
import addWalletForm from "./addWalletForm";

export default combineReducers({
  appConfig,
  wallets,
  sendMoneyForm,
  addWalletForm
});
