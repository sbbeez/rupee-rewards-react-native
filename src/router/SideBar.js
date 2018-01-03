import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  Image
} from "react-native";

const SidebarOptionsList = [
  {
    title: "Dashboard",
    image: "https://png.icons8.com/metro/540/dashboard.png"
  },
  {
    title: "Connected Accounts",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/1000px-New_user_icon-01.svg.png"
  },
  {
    title: "Analytics",
    image: "https://image.flaticon.com/icons/png/512/33/33628.png"
  },
  {
    title: "Instagram",
    image: "https://image.flaticon.com/icons/png/512/69/69366.png"
  },
  {
    title: "Settings",
    image: "https://cdn1.iconfinder.com/data/icons/trycons/32/settings-512.png"
  },
  {
    title: "Log Out",
    image: "https://cdn2.iconfinder.com/data/icons/pictograms-3/512/18-512.png"
  }
];

class SideBar extends Component {
  renderOptions() {
    return SidebarOptionsList.map((item, key) => {
      return (
        <TouchableNativeFeedback key={key} onPress={() => {}}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 20, height: 20, margin: 10 }}
            />
            <Text>{item.title}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    });
  }

  render() {
    return <ScrollView>{this.renderOptions()}</ScrollView>;
  }
}

export default SideBar;
