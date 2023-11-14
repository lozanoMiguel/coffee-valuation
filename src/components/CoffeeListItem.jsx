import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const CoffeeListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <StyledText color={"sand"} fontSize={"body"}>
          {props.item}
        </StyledText>
      </View>

      <View style={styles.votes}>
        <StyledText color={"sand"} fontSize={"body"}>
          {props.votes}
        </StyledText>
      </View>

      <View style={styles.average}>
        <StyledText color={"sand"} fontSize={"body"}>
          {props.average}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 7,
    width: "100%",
  },
  name: {
    flex: 1,
  },
  votes: {
    flex: 1,
  },
  average: {
    flex: 1,
  },
});

export default CoffeeListItem;
