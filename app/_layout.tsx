import * as React from "react";
import { Stack, useRootNavigationState } from "expo-router";

export const Categories = [
  {
    id: 1,
    name: "category-one",
    products: [
      {
        id: 1,
        name: "category-one-product-one",
      },
      {
        id: 2,
        name: "category-one-product-two",
      },
    ],
  },
  {
    id: 2,
    name: "category-two",
    products: [
      {
        id: 1,
        name: "category-two-product-one",
      },
      {
        id: 2,
        name: "category-two-product-two",
      },
    ],
  },
  {
    id: 3,
    name: "category-three",
    products: [
      {
        id: 1,
        name: "category-three-product-one",
      },
      {
        id: 2,
        name: "category-three-product-two",
      },
    ],
  },
  {
    id: 4,
    name: "category-four",
    products: [
      {
        id: 1,
        name: "category-four-product-one",
      },
      {
        id: 2,
        name: "category-four-product-two",
      },
    ],
  },
];

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const navigationState = useRootNavigationState();

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
