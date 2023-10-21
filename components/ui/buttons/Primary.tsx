import React from "react";
import { Button, View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../../utils/colors";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

function Primary({ children, onPress }: Props) {
  return (
    <View style={styles["outer-container"]}>
      <Pressable
        style={styles["inner-container"]}
        onPress={onPress}
        android_ripple={{
          color: colors.red[400],
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Primary;

const styles = StyleSheet.create({
  "outer-container": { borderRadius: 28, margin: 4, overflow: "hidden" },
  "inner-container": {
    backgroundColor: colors.red[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
