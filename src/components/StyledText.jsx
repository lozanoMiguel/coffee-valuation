import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    color: theme.color.red,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeight.bold,
    textAlign: theme.textAlign.center,
  },
  textColorWhite: {
    color: theme.color.white,
  },
  textColorDark: {
    color: theme.color.dark,
  },
  textColorSand: {
    color: theme.color.sand,
  },
  fontSizesBody: {
    fontSize: theme.fontSizes.body,
  },
});

export default function StyledText({
  children,
  text,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    color === "white" && styles.textColorWhite,
    color === "dark" && styles.textColorDark,
    color === "sand" && styles.textColorSand,
    fontSize === "body" && styles.fontSizesBody,
  ];

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
