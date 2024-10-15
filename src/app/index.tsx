import { Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function Home() {
  return <Redirect href={"/(tabs)"} />;
}
