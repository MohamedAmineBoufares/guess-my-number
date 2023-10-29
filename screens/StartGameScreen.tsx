import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
  Text,
} from "react-native";
import Primary from "../components/ui/buttons/Primary";
import colors from "../utils/colors";

const Dices = require("./../assets/dices.jpg");

type Props = {
  handlePickerNumber: (number: number) => void;
};

function StartGameScreen({ handlePickerNumber }: Props) {
  const [input, setInput] = useState("");

  const resetInput = () => {
    setInput("");
  };

  const onChange = ({
    nativeEvent: { text },
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInput(text);
  };

  const onPress = () => {
    const chosenNumber = +input;

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "default", onPress: resetInput }]
      );
    }

    handlePickerNumber(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Dices}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 8, opacity: 0.8 }}
      >
        <Text style={styles["main-tile"]}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          value={input}
          onChange={onChange}
        />

        <View style={styles["buttons-wrapper"]}>
          <View style={styles["button-container"]}>
            <Primary onPress={resetInput}>Reset</Primary>
          </View>

          <View style={styles["button-container"]}>
            <Primary onPress={onPress}>Confirm</Primary>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
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
  "main-tile": {
    color: colors.yellow,
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
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
