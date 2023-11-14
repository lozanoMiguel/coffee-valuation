import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import coffeeValuation from "../../assets/images/coffeeValuation.jpg";
import StyledText from "./StyledText";
import CoffeeListItem from "./CoffeeListItem";

const CoffeeList = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeValuation}
        style={styles.backgroundCoffeList}
      >
        <View style={styles.containerCoffeeTitle}>
          <StyledText color={"sand"} fontSize={"title"}>
            Coffee raiting
          </StyledText>
        </View>
        <CoffeeListItem
          item={"Café solo"}
          votes={"1"}
          average={"5"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Cortado"}
          votes={"6"}
          average={"9"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Americano"}
          votes={"8"}
          average={"10"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Café con leche"}
          votes={"20"}
          average={"8.5"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Flat white"}
          votes={"20"}
          average={"8.5"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Capuchino"}
          votes={"30"}
          average={"8.5"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Moka late"}
          votes={"30"}
          average={"8.5"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Caramel late"}
          votes={"18"}
          average={"7"}
        ></CoffeeListItem>
        <CoffeeListItem
          item={"Vanilla late"}
          votes={"12"}
          average={"7"}
        ></CoffeeListItem>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundCoffeList: {
    height: "100%",
    width: "100%",
  },
  containerCoffeeTitle: {
    marginBottom: 10,
  },
});

export default CoffeeList;
