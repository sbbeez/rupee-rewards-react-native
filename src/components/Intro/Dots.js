import React, { Component } from "react";
import { View } from "react-native";
import { Colors } from "../../themes";

const data = [0, 1, 2];

export default props => {
  return (
    <View style={[{ flexDirection: "row" }, props.style]}>
      {data.map((item, key) => (
        <View
          key={key}
          style={{
            margin: 5,
            width: 10,
            height: 10,
            borderRadius: 30,
            backgroundColor:
              props.value === item ? Colors.intro_status : Colors.login_status
          }}
        />
      ))}
    </View>
  );
};
