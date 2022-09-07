import { Icon } from "@rneui/themed";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "43 Moira Crescent ST Marys",
  },
  {
    id: "345",
    icon: "briefcase",
    location: "Work",
    destination: "St marys Station",
  },
];

export default function NavFavorite() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-0.5" />}
      renderItem={({ item: { location, destination, icon } }) => (
        <View className="flex-row items-center p-5">
          <TouchableOpacity className="mr-4 rounded-full bg-gray-300 p-3 ">
            <Icon name={icon} type="ionicon" color="black" size={20} />
          </TouchableOpacity>
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
