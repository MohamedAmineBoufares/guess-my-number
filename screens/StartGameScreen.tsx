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
      <View style={styles["buttons-wrapper"]}>
        <View style={styles["button-container"]}>
          <Primary onPress={onPress}>Reset</Primary>
        </View>

        <View style={styles["button-container"]}>
          <Primary onPress={onPress}>Confirm</Primary>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.red[900],
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
  "buttons-wrapper": {
    flexDirection: "row",
    justifyContent: "center",
  },

  "button-container": {
    flex: 1,
  },
});
