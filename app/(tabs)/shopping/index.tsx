import * as React from "react";
import { View, Text } from "react-native";
import { Categories } from "../../_layout";

export default function Category() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Categories.map((item) => {
        return (
          <Text key={`${item.id}-${item.name}`} style={{ padding: 8 }}>
            {item.id} - {item.name}
          </Text>
        );
      })}
    </View>
  );
}
