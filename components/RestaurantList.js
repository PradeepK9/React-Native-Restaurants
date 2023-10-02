import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ff69b4",
  },
  centeredTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 14,
    textAlign: "center",
    color: "#4b0082",
    backgroundColor: "#00ff7f",
  },
  listItem: {
    backgroundColor: "#d8bfd8",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 15,
    textAlign: "center",
  },
});

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  console.log("RestaurantList.....");

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    axios
      .get(apiUrl)
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.centeredTitle}>Restaurents List</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantList;
