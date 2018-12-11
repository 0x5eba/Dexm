import { addLocaleData } from "react-intl";
import "intl";

import * as en from "react-intl/locale-data/en";

addLocaleData([...en]);

import enMessages from "./locales/messages.en";

export function getLocaleMessages(locale) {
  if (locale.startsWith("en")) {
    return enMessages;
  } else {
    return {};
  }
}
