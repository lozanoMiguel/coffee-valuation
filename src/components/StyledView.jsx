import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  view: {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    flexDirection: theme.flexDirection.column,
    borderColor: theme.color.red,
    width: theme.width.father,
    height: theme.height.father,
    paddingRight: theme.padding.paddingRight,
    paddingLeft: theme.padding.paddingLeft,
  },
  widthChild: {
    width: theme.width.child,
  },
  heightChild: {
    height: theme.height.child,
  },
  borderWidth: {
    borderWidth: theme.border.borderWidth,
  },
  borderBottomLeftRadius: {
    borderBottomLeftRadius: theme.border.borderBottomLeftRadius,
  },
  borderBottomRightRadius: {
    borderBottomRightRadius: theme.border.borderBottomRightRadius,
  },
  borderTopLeftRadius: {
    borderTopLeftRadius: theme.border.borderTopLeftRadius,
  },
  borderTopRightRadius: {
    borderTopRightRadius: theme.border.borderTopRightRadius,
  },
});

export default function StyledView({
  children,
  width,
  height,
  border,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  ...restOfProps
}) {
  const viewStyle = [
    styles.view,
    height === "child" && styles.heightChild,
    width === "child" && styles.widthChild,
    border === "border" && styles.borderWidth,
    borderTopLeftRadius === "bordertopleftradius" && styles.borderTopLeftRadius,
    borderTopRightRadius === "bordertoprightradius" &&
      styles.borderTopRightRadius,
    borderBottomLeftRadius === "borderbottomleftradius" &&
      styles.borderBottomLeftRadius,
    borderBottomRightRadius === "borderbottomrightradius" &&
      styles.borderBottomRightRadius,
  ];

  return (
    <View style={viewStyle} {...restOfProps}>
      {children}
    </View>
  );
}
