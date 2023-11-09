import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import StyledText from "./StyledText";

const CoffeeItem = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <StyledText color={"sand"} fontSize={"body"}>
          {props.location}
        </StyledText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,

    padding: 5,
    backgroundColor: "transparent",
    margin: 5,
  },
});

export default CoffeeItem;
