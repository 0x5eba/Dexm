export const APPCONFIG_SET = "APPCONFIG_SET";

export const setAppConfig = appConfig => ({
  type: APPCONFIG_SET,
  appConfig
});
