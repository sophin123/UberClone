import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

import Lottie from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function EatsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Lottie source={require("../assets/food-delivery.json")} autoPlay loop />
      <Text
        className="z-40 absolute top-20  text-xl"
        style={{ alignSelf: "center" }}
      >
        WORKING ON IT
      </Text>
      <TouchableOpacity
        className="absolute top-20 left-5 z-50 rounded-full"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
