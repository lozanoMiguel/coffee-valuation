import React, { useState } from "react";
import StyledText from "./StyledText";
import StyledView from "./StyledView";
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundCoffeHome from "../../assets/images/backgroundCoffee.jpg";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Home = () => {
  const [nameFilter, setNameFilter] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundCoffeHome}
        style={styles.backgroundCoffeHome}
      >
        <View style={styles.titleContainer}>
          <StyledText color={"sand"}>
            In which coffee shop are you located?
          </StyledText>
        </View>
        <View style={styles.inputSearchContainer}>
          <TextInput
            placeholder="Coffee shop"
            placeholderTextColor={"#F5F2E5"}
            style={{ fontSize: 20, paddingRight: 20, color: "#F5F2E5" }}
            value={nameFilter}
            onChangeText={(text) => setNameFilter(text)}
          />
          <Pressable
            onPress={() =>
              navigation.navigate("CoffeeShop", { coffeeName: nameFilter })
            }
          >
            <FontAwesome name="search" style={styles.search} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  inputSearchContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backgroundCoffeHome: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  search: {
    paddingTop: 4,
    color: "#F5F2E5",
    fontSize: 20,
  },
});

export default Home;
