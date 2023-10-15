import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Primary from "../components/buttons/Primary";
import colors from "../utils/colors";

function StartGameScreen() {
  const onPress = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
      />
      <Primary onPress={onPress}>Reset</Primary>
      <Primary onPress={onPress}>Confirm</Primary>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: colors.red[900],
    marginHorizontal: 24,
    borderRadius: 8,
    // android shadow
    elevation: 4,

    // ios shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
    color: colors.yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
