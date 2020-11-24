import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
