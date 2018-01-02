import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import { loginAction } from "../actions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  LoadingModalManager,
  LoadingModal
} from "react-native-loading-spinner-modal";
//Dimensions and colors
import { Dimens, Colors } from "../themes";
//Common components import
import { DarkText, RoundButton } from "../components/common";
//images
import { Images } from "../themes";
//utils
import { APP_NAME } from "../utils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }
  componentDidMount() {
    LoadingModalManager.registerModal(this.refs.loadingmodal);
  }
  render() {
    const { number } = this.state;
    const { loginAction, navigation } = this.props;
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <LoadingModal ref="loadingmodal" />
        <ImageBackground
          style={styles.container}
          source={{
            uri:
              "https://thechive.files.wordpress.com/2015/01/i-think-its-time-for-a-new-phone-background-50-photos-4.jpg?quality=85&strip=info&w=600"
          }}
        >
          <StatusBar
            backgroundColor={Colors.white}
            barStyle="light-content"
          />
          <Image source={Images.logo} style={styles.introImages} />
          <DarkText text={APP_NAME} style={styles.appName} />
          <DarkText
            text={"Login"}
            style={{ margin: 10, color: Colors.black }}
          />
          <TextInput
            style={styles.textInput}
            placeholder={"Phone Number"}
            keyboardType={"phone-pad"}
            underlineColorAndroid={"transparent"}
            onChangeText={text => {
              if (text.length < 11) {
                this.setState({ number: text });
              }
            }}
            value={number}
          />
          <RoundButton
            title={"Login"}
            style={{ marginTop: 30 }}
            onPress={() => loginAction(number, navigation)}
          />
          <Text
            style={styles.createAccounText}
            onPress={() => {
              navigation.navigate("signup", {});
            }}
          >
            No account? create one here.
          </Text>
        </ImageBackground>
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
    justifyContent: "center"
  },
  introImages: {
    width: 100,
    height: 100,
    margin: 10
  },
  createAccounText: {
    color: Colors.white,
    margin: 5,
    fontSize: 15,
    padding: 10
  },
  textInput: {
    width: Dimens.width * 0.9,
    textAlign: "center",
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    fontSize: 20
  },
  appName: { margin: 5, fontSize: 25, color: Colors.white }
});
export default connect(null, { loginAction })(Login);
