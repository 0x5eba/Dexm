import { APPCONFIG_SET } from "../actions/appConfigActions";

export default (state, action) => {
  switch (action.type) {
    case APPCONFIG_SET:
      return action.appConfig;

    default:
      return state || null;
  }
};
