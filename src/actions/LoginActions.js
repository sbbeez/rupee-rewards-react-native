import { IS_LOADING_LOGIN_TYPE } from "./types";

export const isLoadingLoginAction = payload => {
  return {
    type: IS_LOADING_LOGIN_TYPE,
    payload
  };
};
