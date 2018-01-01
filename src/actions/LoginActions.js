import { LOGIN_TYPE } from "./types";
import { showToast } from "../utils";
import { postRequest, POST_LOGIN } from "../services";
import { LoadingModalManager } from "react-native-loading-spinner-modal";

export const loginAction = (phone, navigation) => {
  return async dispatch => {
    LoadingModalManager.showLoadingModal({
      cancelable: false
    });
    // if (phone.length === 10) {
    //   const loginJson = await postRequest(POST_LOGIN, { phone });
    //   loginJson
    //     ? navigation.navigate("otp_verify", { phone })
    //     : showToast("Oops! something went wrong, try again");
    // } else {
    //   showToast("Please enter valid number");
    // }
    navigation.navigate("otp_verify", { phone }); //deletable after hosting
    LoadingModalManager.hideLoadingModal();
  };
};
