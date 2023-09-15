import React from "react";
import StyledText from "./StyledText";
import StyledView from "./StyledView";
import { TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WhereBtn = () => {
  const navigation = useNavigation();
  return (
    <StyledView
      height={"child"}
      width={"child"}
      border={"border"}
      borderBottomLeftRadius={"borderbottomleftradius"}
      borderBottomRightRadius={"borderbottomrightradius"}
      borderTopLeftRadius={"bordertopleftradius"}
      borderTopRightRadius={"bordertoprightradius"}
    >
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("CoffeeShop")}
      >
        <StyledText>Where are you?</StyledText>
      </TouchableNativeFeedback>
    </StyledView>
  );
};

export default WhereBtn;
