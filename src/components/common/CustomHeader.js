import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { Dimens, Colors, Images } from "../../themes";
import DarkText from "./DarkText";

class CustomHeader extends Component {
  render() {
    //data
    const { title, showBack } = this.props;
    //actions
    const { onLeftPressed } = this.props;
    return (
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => onLeftPressed()}>
          <View>
            <Image
              source={showBack ? Images.back_arrow_white : Images.menu_white}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <DarkText text={title} style={{ color: Colors.white }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    width: Dimens.width,
    padding: 15,
    alignItems: "center",
    elevation: 10,
    backgroundColor: Colors.intro_status,
    flexDirection: "row"
  },
  icon: { width: 15, height: 15, marginRight: 10 }
});

export default CustomHeader;
