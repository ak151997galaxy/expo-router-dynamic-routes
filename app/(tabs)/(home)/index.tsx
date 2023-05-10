import { useRouter } from "expo-router";
import * as React from "react";
import { View, Text, Pressable } from "react-native";
import Product from "../../../src/components/Product";
import { Categories } from "../../_layout";

export default function Home() {
  const router = useRouter();

  const navigateToProduct = React.useCallback(
    (id, name) => {
      router.push({
        pathname: `/shopping/product/${id}`,
        params: { name },
      });
    },
    [router]
  );

  const navigateTocategory = React.useCallback(
    (id, name) => {
      router.push({
        pathname: `/shopping/category/${id}`,
        params: { name },
      });
    },
    [router]
  );

  return (
    <View style={{ paddingHorizontal: 24 }}>
      {Categories.map((category) => {
        return (
          <View
            style={{ paddingTop: 16 }}
            key={`${category.id}-${category.name}`}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{category.name}</Text>
              <Text
                onPress={() => navigateTocategory(category.id, category.name)}
              >
                See all
              </Text>
            </View>
            {category.products.map((product) => {
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  onPress={navigateToProduct}
                  key={`${product.id}-${product.name}`}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
