import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
//thmes
import { Colors, Dimens, Images } from "../../themes";
//Common Component
import { DarkText } from "../common";

class AdWatch extends Component {
  render() {
    return (
      <View style={styles.adWatchView}>
        <DarkText
          text={"Click here to earn rewards"}
          style={{ color: Colors.white }}
        />
        <View style={styles.mainView}>
          <TouchableOpacity>
            <View style={styles.playButtonView}>
              <Image
                source={Images.play_blue}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.toolMainView}>
            <Text>5000</Text>
          </View>
          <View style={styles.toolView} />
          <View style={styles.slide} />
          <DarkText
            text={"Get 5000 Credits to earn more rewards every day"}
            style={styles.bottomText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  adWatchView: {
    padding: 5,
    width: Dimens.width * 0.9,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: Colors.intro_status,
    elevation: 20
  },
  mainView: { alignItems: "center", justifyContent: "center" },
  playButtonView: {
    margin: 30,
    elevation: 20,
    backgroundColor: Colors.white,
    borderRadius: 100,
    padding: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomText: { textAlign: "center", color: Colors.white, fontSize: 15 },
  slide: {
    width: Dimens.width * 0.8,
    height: 5,
    backgroundColor: Colors.divider,
    margin: 20
  },
  toolView: {
    width: 13,
    backgroundColor: Colors.white,
    height: 13,
    marginRight: -(Dimens.width * 0.77),
    marginBottom: -18,
    transform: [{ rotate: "45deg" }]
  },
  toolMainView: {
    width: 55,
    height: 25,
    backgroundColor: Colors.white,
    marginRight: -(Dimens.width * 0.72),
    marginBottom: -12,
    borderRadius: 5,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AdWatch;
