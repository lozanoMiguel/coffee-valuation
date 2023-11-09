import React from "react";
import Home from "./Home";
import CoffeeShopList from "./CoffeeShopList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoffeeShop" component={CoffeeShopList} />
    </Stack.Navigator>
  );
};

export default Main;
