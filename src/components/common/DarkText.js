import React, { Component } from "react";
import { Text } from "react-native";

export default props => {
  return (
    <Text
      style={[
        { color: "#000", fontSize: 17, fontWeight: "bold" },
        props.style
      ]}
      numberOfLines={props.numberOfLines}
    >
      {props.text}
    </Text>
  );
};
