import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, FlatList } from "react-native";

import StyledText from "./StyledText";

const CoffeeShopList = ({ navigation }) => {
  const [cafeterias, setCafeterias] = useState([]);
  const apiKey =
    "Wqi4PxI8gwIFGb8RVVeAWeNQIa5dG23tkxQeK-FFr2JeWJLugGiTQ1q4NnUou5cgxMZzan28e5TocyQRyfxcwIAhptCy-kYQgeaAoFtxCO_XrSFv7nTcGMyONPEFZXYx"; // Reemplaza con tu clave de API de Yelp
  const location = "Barcelona";
  const categories = "coffee";

  const fetchData = async (offset) => {
    try {
      const response = await axios.get(
        "https://api.yelp.com/v3/businesses/search",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: {
            location,
            categories,
            limit: 50, // Límite por página
            offset, // Ajusta el offset para la paginación
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.businesses;
        setCafeterias((prevCafeterias) => [...prevCafeterias, ...data]);
        // Verificar si hay más resultados y continuar la paginación
        if (data.length === 50) {
          fetchData(offset + 50);
        }
      } else {
        console.error(`Error en la solicitud: ${response.status}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    fetchData(0); // Comenzar con offset 0
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cafeterias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.location.address}</Text>
          </View>
        )}
      />
      <Text>{cafeterias.length}</Text>
    </View>
  );
};

export default CoffeeShopList;
