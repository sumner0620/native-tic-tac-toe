import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export function Square(props) {
  const squareStyles = StyleSheet.create({
    square: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#999",
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: 34,
      height: 30,
      marginRight: -1,
      marginTop: -1,
      padding: 0,
      textAlign: "center",
      width: 30
    }
  });
  return (
    <Button
      className="square"
      style={squareStyles.square}
      onPress={props.onClick}
      action={props.xHandler}
      title={props.value}
    />
  );
}
// send to Board
