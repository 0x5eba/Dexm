import { Platform } from "react-native";

import Colors from "./Colors";

const defaultFont = Platform.OS == 'ios' ? "Avenir Next" : "Lato";
// const defaultFont = "Lato";

export default {
  default: {
    fontFamily: defaultFont,
    color: Colors.textColor
  },
  defaultAccent: {
    fontFamily: defaultFont,
    color: Colors.lightColor
  }
};
