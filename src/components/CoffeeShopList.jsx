import React from "react";
import { useState } from "react";
import axios from "axios";
import { View, Text, FlatList, TextInput, Button } from "react-native";

import StyledText from "./StyledText";
import StyledView from "./StyledView";

const CoffeeShopList = ({ navigation }) => {
  const [cafeterias, setCafeterias] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
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
            categories,
            term: filtroNombre,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.businesses;
        setCafeterias((prevCafeterias) => [...prevCafeterias, ...data]);
        // Verificar si hay más resultados y continuar la paginación
        /*if (data.length > 0) {
          fetchData(offset + 50);
        }*/
      } else {
        console.error(`Error en la solicitud: ${response.status}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  /*useEffect(() => {
    fetchData(0); // Comenzar con offset 0
  }, []);

  const filtrarCafeterias = () => {
    const cafeteriasFiltradas = cafeterias.filter((cafe) =>
      cafe.name.toLowerCase().includes(filtroNombre.toLowerCase())
    );
    setCafeterias(cafeteriasFiltradas);
  };*/

  return (
    <StyledView>
      <TextInput
        placeholder="Buscar por nombre"
        value={filtroNombre}
        onChangeText={(text) => setFiltroNombre(text)}
      />
      <Button title="Filtrar" onPress={fetchData} />
      <FlatList
        data={cafeterias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.location.address1}</Text>
          </View>
        )}
      />
      <Text>{filtroNombre}</Text>
    </StyledView>
  );
};

export default CoffeeShopList;
