import React from "react";
import StyledText from "./StyledText";
import StyledView from "./StyledView";
import { TouchableNativeFeedback, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <StyledView>
      <StyledView height={"child"} width={"child"}>
        <StyledText color={"dark"}>
          In which coffee shop are you located?
        </StyledText>
        <TextInput placeholder="Buscar por nombre" />
      </StyledView>
    </StyledView>
  );
};

export default Home;
