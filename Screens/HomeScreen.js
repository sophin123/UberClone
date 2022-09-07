import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import NavOption from "../Components/NavOption";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";

import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorite from "../Components/NavFavourite";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5969/5969269.png",
          }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={600}
          placeholder="From"
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOption />
        <NavFavorite />
      </View>
    </SafeAreaView>
  );
}
