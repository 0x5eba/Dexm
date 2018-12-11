import {
  SENDMONEYFORM_SET_DESCRIPTION,
  SENDMONEYFORM_SET_AMOUNT,
  SENDMONEYFORM_SET_RECIPIENT_DESCRIPTION,
  SENDMONEYFORM_SET_RECIPIENT_ID
} from "../actions/sendMoneyFormActions";

export default (state, action) => {
  switch (action.type) {
    case SENDMONEYFORM_SET_DESCRIPTION:
      return {
        description: action.value || ""
      };

    case SENDMONEYFORM_SET_AMOUNT:
      const n = parseFloat(action.value.replace(/[^\d.]/g, ""));
      return {
        amount: isNaN(n) ? 0 : n
      };

    case SENDMONEYFORM_SET_RECIPIENT_DESCRIPTION:
      return {
        recipientDescription: action.value
      };

    case SENDMONEYFORM_SET_RECIPIENT_ID:
      return {
        recipientId: action.value
      };

    default:
      return (
        state || {
          description: "",
          amount: 0,
          recipientDescription: "",
          recipientId: "",
          recents: []
        }
      );
  }
};
