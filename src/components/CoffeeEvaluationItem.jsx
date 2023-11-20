import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import NumericInput from "react-native-numeric-input";

const CoffeeEvaluationItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <StyledText color={"sand"} fontSize={"subTitle"}>
          {props.name}
        </StyledText>
      </View>
      <View style={styles.inputRange}>
        <NumericInput
          type="plus-minus"
          containerStyle={{ backgroundColor: "black", marginLeft: 30 }}
          onChange={(value) => console.log(value)}
          minValue={1}
          maxValue={10}
          textColor="white"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="black"
          leftButtonBackgroundColor="black"
          totalWidth={75}
          totalHeight={40}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin: 20,
  },
  name: {
    flex: 1,
  },
  inputRange: {
    flex: 1,
  },
});

export default CoffeeEvaluationItem;
