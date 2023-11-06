import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList, StyleSheet } from "react-native";
import StyledView from "./StyledView";
import CoffeeItem from "./CoffeeItem";
import StyledText from "./StyledText";

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
        for (let i = 0; i < data.length; i++) {
          let coffee = data[i].name.toLowerCase();
          if (coffee.includes(variable)) {
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
      <StyledText color={"dark"}>{title}</StyledText>
      <FlatList
        data={cafeterias}
        renderItem={({ item }) => (
          <View key={item.id}>
            <CoffeeItem location={item.location.address1}></CoffeeItem>
          </View>
        )}
      />
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
});

export default CoffeeShopList;
