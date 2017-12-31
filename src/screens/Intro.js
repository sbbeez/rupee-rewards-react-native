import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Button
} from "react-native";

//Constant
import { intro_screen_data } from "../utils";
//Dimensions and colors
import { Dimens, Colors } from "../themes";
//Common Components
import { DarkText, RoundButton } from "../components/common";
//Screen Components
import Dots from "../components/Intro/Dots";

class Intro extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar
          backgroundColor={Colors.intro_status}
          barStyle="light-content"
        />
        {intro_screen_data.map((item, key) => {
          return (
            <View key={key} style={styles.container}>
              <Image source={item.image} style={styles.introImages} />
              <DarkText text={item.title} />
              <Text style={styles.desc}>{item.description}</Text>
              {key === 2 ? (
                <RoundButton
                  title={"Get Started"}
                  onPress={() => this.props.navigation.navigate("login", {})}
                />
              ) : (
                <View />
              )}
              <View style={styles.divider} />
              <Dots
                value={key}
                style={{
                  marginTop: key === 2 ? -10 : -20,
                  marginBottom: key === 2 ? 20 : 15
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimens.width,
    height: Dimens.height,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.intro_bg
  },
  introImages: {
    width: 300,
    height: 300
  },
  desc: {
    margin: 20,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300"
  },
  divider: {
    width: Dimens.width,
    height: 1,
    backgroundColor: Colors.white
  }
});
export default Intro;
