import { postRequest, POST_OTP, POST_RESEND_OTP } from "../services";
import { showToast } from "../utils";
import { LoadingModalManager } from "react-native-loading-spinner-modal";

export const verifyOtpAction = (otp, phone, navigation) => {
  return async dispatch => {
    LoadingModalManager.showLoadingModal({
      text: "Verifying OTP"
    });
    // const verifyOtpJson = await postRequest(POST_OTP, { phone, otp });
    // verifyOtpJson
    //   ? navigation.navigate("main_screen", {})
    //   : showToast("Oops something went wrong!");
    navigation.navigate("main_screen", {});
    LoadingModalManager.hideLoadingModal();
  };
};

export const resendOtpAction = phone => {
  return async dispatch => {
    LoadingModalManager.showLoadingModal({
      text: "Reqesting Otp"
    });
    // const resendOtpJson = await postRequest(POST_RESEND_OTP, { phone });
    // resendOtpJson
    //   ? LoadingModalManager.hideLoadingModal()
    //   : showToast("Oops something went wrong!");
    showToast("Your OTP will be sent in few seconds.")
    LoadingModalManager.hideLoadingModal();
  };
};
