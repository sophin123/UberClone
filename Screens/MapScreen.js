import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import MapView from "react-native-maps";
import Map from "../Components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionCar from "../Components/RideOptionCar";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="bg-gray-100 top-16 left-8 z-50 p-3 rounded-full shadow-lg w-12"
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCar"
            component={RideOptionCar}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
