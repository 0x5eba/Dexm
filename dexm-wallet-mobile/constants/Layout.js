import { Dimensions, Platform, NativeModules } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const spacing = 8;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  spacing,
  sideMargin: spacing * 3,
  statusBar: Platform.OS === "ios" ? 20 : NativeModules.StatusBarManager.HEIGHT,
  endMargin: spacing * 8
};
