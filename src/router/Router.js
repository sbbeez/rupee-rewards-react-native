import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import ReduxThunk from "redux-thunk";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";

/*~~~~~~~~~~~Screens~~~~~~~~~~~~~~*/
import { Intro, Login, SignUp, OtpVerify, MainScreen } from "../screens";

import SideBar from "./SideBar";

//Delete
import { Text } from "react-native";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const AuthStack = StackNavigator({
  intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  signup: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  otp_verify: {
    screen: OtpVerify,
    navigationOptions: {
      header: null
    }
  }
});
const DrawerStack = DrawerNavigator({
  main_screen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  }
});

const MainNavigator = StackNavigator(
  {
    auth_stack: {
      screen: AuthStack
    },
    main_stack: {
      screen: DrawerStack
    }
  },
  {
    headerMode: "none"
  }
);

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default Router;
