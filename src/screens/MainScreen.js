import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import {} from "../actions";
//common components
import { CustomHeader } from "../components/common";
//Dashboard Components
import { AdWatch } from "../components/Dashboard";
//Colors
import { Colors } from "../themes";

class MainScreen extends Component {
  render() {
    //navigation
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.login_bg} barStyle="light-content" />
        <CustomHeader
          title={"Dashboard"}
          onLeftPressed={() => navigation.navigate("DrawerToggle")}
        />
        <View style={styles.mainView}>
          <AdWatch />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: { flex: 1, alignItems: "center", justifyContent: "center" }
});
// const mapStateToProps = state => {
//   const {} = state.mainscreen;
//   return {};
// };
export default connect(null, {})(MainScreen);
