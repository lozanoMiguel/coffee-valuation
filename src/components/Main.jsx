import React from "react";
import Home from "./Home";
import CoffeeShopList from "./CoffeeShopList";
import CoffeeList from "./CoffeeList";
import CoffeeOptions from "./CoffeeOptions";
import CoffeeEvaluation from "./CoffeeEvaluation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Coffee Shop" component={CoffeeShopList} />
      <Stack.Screen name="Options" component={CoffeeOptions} />
      <Stack.Screen name="Coffee raiting" component={CoffeeList} />
      <Stack.Screen name="Evaluate" component={CoffeeEvaluation} />
    </Stack.Navigator>
  );
};

export default Main;
