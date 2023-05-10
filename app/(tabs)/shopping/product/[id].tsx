import { Stack, useSearchParams } from "expo-router";
import * as React from "react";
import { View, Text } from "react-native";

export default function ProductDetail() {
  const { id, name } = useSearchParams();

  console.log("product screen");
  return (
    <>
      <Stack.Screen options={{ title: "Product Details" }} />
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 16 }}
      >
        <Text>
          ProductScreen - {id} - {name}
        </Text>
      </View>
    </>
  );
}
