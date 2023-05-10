import { Stack, useRouter, useSearchParams } from "expo-router";
import * as React from "react";
import { View, Text } from "react-native";
import Product from "../../../../src/components/Product";
import { Categories } from "../../../_layout";
import ProductDetail from "../product/[id]";

export default function CategoryDetail() {
  const { id, name } = useSearchParams() as { id: string; name: string };
  const router = useRouter();

  const category = React.useMemo(() => {
    return Categories.find((category) => category.id === parseInt(id));
  }, []);

  console.log("category screen");

  const navigateToProduct = React.useCallback(
    (id, name) => {
      router.push({
        pathname: `/shopping/product/${id}`,
        params: { name },
      });
    },
    [router]
  );
  return (
    <>
      <Stack.Screen options={{ title: "Category" }} />
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 16 }}
      >
        <Text style={{ fontSize: 20, paddingBottom: 24 }}>
          CategoryScreen - {id} - {name}
        </Text>

        <Text style={{ paddingBottom: 16 }}>
          NOTE:- on press category list item to navigate to detail screen
        </Text>
        {category.products.map((item) => (
          <Product
            id={item.id}
            name={item.name}
            onPress={navigateToProduct}
            key={`${item.id}-${item.name}`}
          />
        ))}
      </View>
    </>
  );
}
