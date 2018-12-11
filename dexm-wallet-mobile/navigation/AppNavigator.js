import React from "react";
import { createStackNavigator } from "react-navigation";

import MyWallets from "../screens/MyWallets";
import WalletView from "../screens/WalletView";
import SendMoney from "../screens/SendMoney";
import ReceiveMoney from "../screens/ReceiveMoney";
import AddWallet from "../screens/AddWallet";

export default createStackNavigator({
  MyWallets: { screen: MyWallets },
  WalletView: { screen: WalletView },
  SendMoney: { screen: SendMoney },
  ReceiveMoney: { screen: ReceiveMoney },
  AddWallet: { screen: AddWallet }
});
