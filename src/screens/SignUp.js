import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import { signUpAction } from "../actions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  LoadingModalManager,
  LoadingModal
} from "react-native-loading-spinner-modal";
import DatePicker from "react-native-datepicker";
//Dimensions and colors
import { Dimens, Colors } from "../themes";
//Common components import
import { DarkText, RoundButton } from "../components/common";
//images
import { Images } from "../themes";
//utils
import { APP_NAME } from "../utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      email: "",
      male_selected: false,
      female_selected: false,
      date: ""
    };
  }
  componentDidMount() {
    LoadingModalManager.registerModal(this.refs.loadingmodal);
  }
  renderRoundIcon(gender_selected, unselect_gender, gender) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.setState({
            [unselect_gender]: false,
            [gender_selected]: !this.state[gender_selected]
          })}
      >
        <View
          style={{
            elevation: 10,
            backgroundColor: this.state[gender_selected]
              ? Colors.intro_status
              : Colors.divider,
            padding: 10,
            borderRadius: 100,
            alignItems: "center",
            margin: 10
          }}
        >
          <Image
            source={
              this.state[gender_selected]
                ? Images[gender + "_white"]
                : Images[gender + "_black"]
            }
            style={{ width: 50, height: 50 }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  render() {
    //state
    const { male_selected, female_selected, date, email, number } = this.props;
    //navigation
    const { navigation } = this.props;
    //actions
    const { signUpAction } = this.props;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={Colors.intro_bg}
            barStyle="light-content"
          />
          <DarkText text={"SIGN UP"} style={{ margin: 10 }} />
          <TextInput
            returnKeyType={"next"}
            style={styles.textInput}
            placeholder={"Email"}
            keyboardType={"email-address"}
            underlineColorAndroid={"transparent"}
            onChangeText={text => {}}
          />
          <TextInput
            returnKeyType={"next"}
            style={styles.textInput}
            placeholder={"Phone Number"}
            keyboardType={"phone-pad"}
            underlineColorAndroid={"transparent"}
            onChangeText={text => {}}
          />
          <DarkText text={"gender"} />
          <View style={styles.genderView}>
            {this.renderRoundIcon("male_selected", "female_selected", "male")}
            {this.renderRoundIcon("female_selected", "male_selected", "female")}
          </View>
          <DatePicker
            style={{ width: Dimens.width * 0.9 }}
            date={this.state.date}
            mode="date"
            placeholder="Date Of Birth"
            format="DD-MM-YYYY"
            showIcon={false}
            minDate="01-01-1960"
            maxDate="31-12-2002"
            onDateChange={date => {
              this.setState({ date: date });
            }}
            customStyles={{
              placeholderText: {
                color: Colors.black,
                fontWeight: "bold"
              }
            }}
          />
          <Text style={styles.loginText} onPress={() => navigation.goBack()}>
            Have account? Login here.
          </Text>
          <RoundButton
            title={"Sign Up"}
            onPress={() =>
              signUpAction(
                email,
                number,
                male_selected,
                female_selected,
                date,
                navigation
              )}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    width: Dimens.width * 0.9,
    textAlign: "center",
    backgroundColor: Colors.intro_bg,
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    margin: 10
  },
  container: {
    flex: 1,
    width: Dimens.width,
    height: Dimens.height,
    alignItems: "center",
    justifyContent: "center"
  },
  introImages: {
    width: 100,
    height: 100,
    margin: 10
  },
  loginText: {
    margin: 20,
    color: Colors.black,
    textDecorationLine: "underline"
  },
  genderView: { alignItems: "center", flexDirection: "row", padding: 5 }
});
// const mapStateToProps = state => {
//   const {} = state.signup;
//   return {};
// };
export default connect(null, { signUpAction })(SignUp);
