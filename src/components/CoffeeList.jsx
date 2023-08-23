import React from "react";
import { View, Text } from "react-native";
import repositories from "../data/repositories";

const CoffeeList = () => {
  return (
    <View>
      {repositories.map((repo) => (
        <View key={repo.fullname}>
          <Text>{repo.fullname}</Text>
          <Text>{repo.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default CoffeeList;
