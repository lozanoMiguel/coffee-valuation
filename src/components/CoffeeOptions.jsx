import React from "react";
import { View, StyleSheet, ImageBackground, Pressable } from "react-native";
import StyledText from "./StyledText";
import { useNavigation } from "@react-navigation/native";
import backgroundOptionsImage from "../../assets/images/backgroundCoffeeList2.jpg";

const CoffeeOptions = ({ route }) => {
  const navigation = useNavigation();
  let title = route.params.coffeeShop;
  let location = route.params.location;
  return (
    <View>
      <ImageBackground
        source={backgroundOptionsImage}
        style={styles.backgroundOptionImage}
      >
        <View style={styles.title}>
          <StyledText color={"sand"} fontSize={"title"}>
            What would you like to do?
          </StyledText>
        </View>
        <View style={styles.optionsBox}>
          <Pressable
            onPress={() => navigation.navigate("Coffee raiting")}
            style={styles.options}
          >
            <StyledText color={"sand"} fontSize={"subTitle"}>
              Coffee evaluation
            </StyledText>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Evaluate")}
            style={styles.options}
          >
            <StyledText color={"sand"} fontSize={"subTitle"}>
              Evaluate a coffee
            </StyledText>
          </Pressable>
        </View>
        <View style={styles.boxLocation}>
          <StyledText color={"sand"} fontSize={"body"}>
            {title}
          </StyledText>
          <StyledText color={"sand"} fontSize={"body"}>
            {location}
          </StyledText>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  backgroundOptionImage: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  optionsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    flex: 2,
  },
  options: {
    padding: 1,
    backgroundColor: "transparent",
    alignSelf: "flex-start",
  },
  boxLocation: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default CoffeeOptions;
