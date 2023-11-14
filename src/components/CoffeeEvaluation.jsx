import { View, ImageBackground, StyleSheet } from "react-native";
import coffeeEvaluation from "../../assets/images/evaluationCoffee.jpg";
import CoffeeEvaluationItem from "./CoffeeEvaluationItem";

const CoffeeEvaluation = () => {
  return (
    <View>
      <ImageBackground source={coffeeEvaluation} style={styles.imagenContainer}>
        <CoffeeEvaluationItem name={"Café solo"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Cortado"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Americano"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Café con leche"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Capuchino"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Moka late"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Caramelo late"}></CoffeeEvaluationItem>
        <CoffeeEvaluationItem name={"Vainilla late"}></CoffeeEvaluationItem>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imagenContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
});

export default CoffeeEvaluation;
