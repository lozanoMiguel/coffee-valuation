import React, { useState } from "react";
import StyledText from "./StyledText";
import StyledView from "./StyledView";
import { TouchableNativeFeedback, TextInput, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [nameFilter, setNameFilter] = useState("");
  const navigation = useNavigation();
  return (
    <StyledView>
      <StyledView height={"child"} width={"child"}>
        <StyledText color={"dark"}>
          In which coffee shop are you located?
        </StyledText>
        <TextInput
          placeholder="Coffee shop"
          style={{ fontSize: 20 }}
          value={nameFilter}
          onChangeText={(text) => setNameFilter(text)}
        />
      </StyledView>
      <Button
        title="Search"
        onPress={() =>
          navigation.navigate("CoffeeShop", { coffeeName: nameFilter })
        }
      ></Button>
    </StyledView>
  );
};

export default Home;
