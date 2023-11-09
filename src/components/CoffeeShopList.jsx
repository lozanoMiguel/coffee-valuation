import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import CoffeeItem from "./CoffeeItem";
import StyledText from "./StyledText";
import backgroundCoffeeList from "../../assets/images/backgroundCoffeeList.jpg";
import { CarFilled } from "@ant-design/icons";

const CoffeeShopList = ({ navigation, route }) => {
  let variable = route.params.coffeeName;
  let title =
    route.params.coffeeName.charAt(0).toUpperCase() +
    route.params.coffeeName.slice(1);
  const [cafeterias, setCafeterias] = useState([]);

  const apiKey =
    "Wqi4PxI8gwIFGb8RVVeAWeNQIa5dG23tkxQeK-FFr2JeWJLugGiTQ1q4NnUou5cgxMZzan28e5TocyQRyfxcwIAhptCy-kYQgeaAoFtxCO_XrSFv7nTcGMyONPEFZXYx"; // Reemplaza con tu clave de API de Yelp
  const location = "Barcelona";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.yelp.com/v3/businesses/search",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: {
            location,
            term: variable,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.businesses;
        console.log(cafeterias.length);
        for (let i = 0; i < data.length; i++) {
          let coffee = data[i].name.toLowerCase();

          if (coffee.includes(variable.toLowerCase())) {
            setCafeterias((cafeterias) => [...cafeterias, data[i]]);
          }
        }
      } else {
        console.error(`Error en la solicitud: ${response.status}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundCoffeeList}
        style={styles.backgroundCoffeeList}
      >
        <StyledText color={"sand"}>{title}</StyledText>
        <FlatList
          data={cafeterias}
          renderItem={({ item }) => (
            <View key={item.id}>
              <CoffeeItem location={item.location.address1}></CoffeeItem>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  backgroundCoffeeList: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});

export default CoffeeShopList;
