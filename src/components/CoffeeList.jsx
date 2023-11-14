import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import coffeeValuation from "../../assets/images/coffeeValuation.jpg";
import StyledText from "./StyledText";

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
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Café solo
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Cortado
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Americano
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Cafe con leche
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Flat white
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Capuchino
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Moka latte
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Caramel latte
          </StyledText>
        </View>
        <View style={styles.containerCoffeeItem}>
          <StyledText color={"sand"} fontSize={"body"}>
            Vanilla latte
          </StyledText>
        </View>
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
  containerCoffeeItem: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 7,
  },
});

export default CoffeeList;
