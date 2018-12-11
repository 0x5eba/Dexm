const SENDMONEYFORM_SET_DESCRIPTION = "SENDMONEYFORM_SET_DESCRIPTION";
const SENDMONEYFORM_SET_AMOUNT = "SENDMONEYFORM_SET_AMOUNT";
const SENDMONEYFORM_SET_RECIPIENT_DESCRIPTION =
  "SENDMONEYFORM_SET_RECIPIENT_DESCRIPTION";
const SENDMONEYFORM_SET_RECIPIENT_ID = "SENDMONEYFORM_SET_RECIPIENT_ID";

export const setDescription = value => ({
  type: SENDMONEYFORM_SET_DESCRIPTION,
  value
});

export const setAmount = value => ({
  type: SENDMONEYFORM_SET_AMOUNT,
  value
});

export const setRecipientDescription = value => ({
  type: SENDMONEYFORM_SET_RECIPIENT_DESCRIPTION,
  value
});

export const setRecipientId = value => ({
  type: SENDMONEYFORM_SET_RECIPIENT_ID,
  value
});
