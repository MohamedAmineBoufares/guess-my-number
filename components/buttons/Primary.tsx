import React from "react";
import { Button, View, Text } from "react-native";

interface Props {
  children: React.ReactNode;
}

function Primary({ children }: Props) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default Primary;
