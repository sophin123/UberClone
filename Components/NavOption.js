import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-taxi-front-01-512.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order a food",
    image:
      "https://cdn1.iconfinder.com/data/icons/food-and-drinks-21/64/mexican-tortilla-fast-taco-food-512.png",
    screen: "EatsScreen",
  },
];

export default function NavOption() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View style={{ opacity: origin ? 1 : 0.4 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={{
                padding: 4,
                backgroundColor: "black",
                borderRadius: "100",
                width: 30,
                height: 30,
                marginTop: 4,
              }}
              name="arrowright"
              type="antdesign"
              color="white"
              size={20}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
