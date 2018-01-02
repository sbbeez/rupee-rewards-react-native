import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import { connect } from "react-redux";
import { resendOtpAction, verifyOtpAction } from "../actions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  LoadingModalManager,
  LoadingModal
} from "react-native-loading-spinner-modal";
//Dimensions and colors
import { Dimens, Colors } from "../themes";
//Common components import
import { DarkText, RoundButton } from "../components/common";

class OtpVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ""
    };
  }
  componentDidMount() {
    LoadingModalManager.registerModal(this.refs.loadingmodal);
  }
  render() {
    const { otp } = this.state;
    const { resendOtpAction, navigation, verifyOtpAction, phone } = this.props;
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <LoadingModal ref="loadingmodal" />
        <StatusBar backgroundColor={Colors.intro_bg} barStyle="light-content" />
        <View style={styles.container}>
          <DarkText
            text={
              "Hey you, welcome back! We're glad to welcome you! Happy Bucking!!"
            }
            style={styles.heading}
          />
          <TextInput
            style={styles.textInput}
            placeholder={"Enter OTP"}
            keyboardType={"phone-pad"}
            underlineColorAndroid={"transparent"}
            onChangeText={text => {
              if (text.length < 5) {
                this.setState({ otp: text });
              }
            }}
            value={otp}
          />
          <Text style={styles.resendOtp} onPress={() => resendOtpAction(phone)}>
            Resend OTP
          </Text>
          <RoundButton
            title={"VERIFY OTP"}
            onPress={() => verifyOtpAction(otp, phone, navigation)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimens.width,
    height: Dimens.height,
    alignItems: "center",
    backgroundColor: Colors.white,
    justifyContent: "center"
  },
  heading: { textAlign: "center", margin: 30, color: Colors.login_status },
  textInput: {
    width: Dimens.width * 0.9,
    textAlign: "center",
    backgroundColor: Colors.intro_bg,
    padding: 15,
    borderRadius: 10,
    fontSize: 20
  },
  resendOtp: {
    margin: 20,
    color: Colors.black,
    textDecorationLine: "underline"
  }
});
// const mapStateToProps = state => {
//   const {} = state.otpverify;
//   return {};
// };
export default connect(null, {
  resendOtpAction,
  verifyOtpAction
})(OtpVerify);
