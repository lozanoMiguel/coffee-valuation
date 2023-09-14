import React from "react";
import StyledText from "./StyledText";
import StyledView from "./StyledView";
import { TouchableNativeFeedback, Alert } from "react-native";

const WhereBtn = () => {
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
      <TouchableNativeFeedback onPress={() => Alert.alert("Yendo")}>
        <StyledText>Where are you?</StyledText>
      </TouchableNativeFeedback>
    </StyledView>
  );
};

export default WhereBtn;
