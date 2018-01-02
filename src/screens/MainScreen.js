import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {} from "../actions";

class MainScreen extends Component {
  render() {
    return <View />;
  }
}
const styles = StyleSheet.create({});
// const mapStateToProps = state => {
//   const {} = state.mainscreen;
//   return {};
// };
export default connect(null, {})(MainScreen);
