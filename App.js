import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { StyleSheet, Switch, TextInput } from "react-native";

import "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return <LoginScreen></LoginScreen>;
}
