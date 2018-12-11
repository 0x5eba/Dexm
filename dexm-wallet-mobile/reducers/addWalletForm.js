import {
  ADDWALLETFORM_RESET,
  ADDWALLETFORM_NEXT,
  ADDWALLETFORM_PREVIOUS,
  ADDWALLETFORM_SETNAME
} from "../actions/sendMoneyFormActions";

export const STATE_NAME = "STATE_NAME";
export const STATE_PASSWORD = "STATE_PASSWORD";
export const STATE_IMPORT = "STATE_IMPORT";
export const STATE_AUTH = "STATE_AUTH";
export const STATE_ENDED = "STATE_ENDED";
const states = [
  STATE_NAME,
  STATE_PASSWORD,
  STATE_IMPORT,
  STATE_AUTH,
  STATE_ENDED
];

const resetState = {
  currentState: states[0],
  name: ""
};

export default (state, action) => {
  switch (action.type) {
    case ADDWALLETFORM_RESET:
      return resetState;

    case ADDWALLETFORM_NEXT:
      return {
        ...state,
        currentState: states[states.indexOf(state.currentState) + 1]
      };

    case ADDWALLETFORM_PREVIOUS:
      return {
        ...state,
        currentState: states[states.indexOf(state.currentState) - 1]
      };

    case ADDWALLETFORM_SETNAME:
      return {
        ...state,
        name: state.currentState === STATE_NAME ? action.value : state.name
      };

    default:
      return state || resetState;
  }
};
