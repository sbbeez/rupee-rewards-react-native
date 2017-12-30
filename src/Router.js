import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";

/*~~~~~~~~~~~Screens~~~~~~~~~~~~~~*/
import { Intro } from "./screens";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const MainNavigator = StackNavigator({
  intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  }
});

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
