import { View, ImageBackground, StyleSheet } from "react-native";
import coffeeEvaluation from "../../assets/images/evaluationCoffee.jpg";

const CoffeeEvaluation = () => {
  return (
    <View>
      <ImageBackground
        source={coffeeEvaluation}
        style={styles.imagenContainer}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imagenContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});

export default CoffeeEvaluation;
