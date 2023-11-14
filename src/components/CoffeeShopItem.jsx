import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StyledText from "./StyledText";

const CoffeeItem = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate("Options", {
            coffeeShop: props.title,
            location: props.location,
          })
        }
        style={styles.button}
      >
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
