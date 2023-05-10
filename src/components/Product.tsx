import * as React from "react";
import { View, Text, Pressable } from "react-native";

interface Props {
  id: number;
  name: string;
  onPress: (id: number, name: string) => void;
}

export default function Product({ id, name, onPress }: Props) {
  const handlePress = React.useCallback(() => {
    onPress(id, name);
  }, []);

  return (
    <Pressable onPress={handlePress}>
      <Text key={`${id}-${name}`} style={{ padding: 8 }}>
        {id} - {name}
      </Text>
    </Pressable>
  );
}
