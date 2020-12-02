import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in greate condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          ></Card>
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
