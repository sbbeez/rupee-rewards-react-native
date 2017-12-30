import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

import { Dimens, Colors } from "../../themes";

export default ({ onPress, title }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View
        style={{
          width: Dimens.width * 0.7,
          borderRadius: 30,
          alignItems: "center",
          padding: 15,
          backgroundColor: Colors.intro_status
        }}
      >
        <Text style={{ color: Colors.white }}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
