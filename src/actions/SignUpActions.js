import { showToast } from "../utils";
import { postRequest, POST_SIGN_UP } from "../services";

export const signUpAction = (
  email,
  phone,
  male_selected,
  female_selected,
  date,
  navigation
) => {
  return async dispatch => {
    // const data = {
    //   email,
    //   phone,
    //   date,
    //   gender: male_selected ? "male" : "female"
    // };
    // const signUpJson = await postRequest(POST_SIGN_UP, data);
    navigation.navigate("otp_verify", { phone });
  };
};
