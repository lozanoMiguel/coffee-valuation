import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList } from "react-native";
import StyledView from "./StyledView";

const CoffeeShopList = ({ navigation, route }) => {
  let variable = route.params.coffeeName;
  const [cafeterias, setCafeterias] = useState([]);

  const apiKey =
    "Wqi4PxI8gwIFGb8RVVeAWeNQIa5dG23tkxQeK-FFr2JeWJLugGiTQ1q4NnUou5cgxMZzan28e5TocyQRyfxcwIAhptCy-kYQgeaAoFtxCO_XrSFv7nTcGMyONPEFZXYx"; // Reemplaza con tu clave de API de Yelp
  const location = "Barcelona";
  const categories = "coffee";

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
        setCafeterias((prevCafeterias) => [...prevCafeterias, ...data]);
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
    <StyledView>
      <FlatList
        data={cafeterias}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.location.address1}</Text>
          </View>
        )}
      />
    </StyledView>
  );
};

export default CoffeeShopList;
