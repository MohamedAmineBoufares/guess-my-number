import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/titles/Title";
import { useCallback, useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Primary from "../components/ui/buttons/Primary";
import { Feather } from "@expo/vector-icons";
import colors from "../utils/colors";

let min = 1;
let max = 100;

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNumber;
};

type Props = {
  pickerNumber: number;
  handlePickerNumber: (number: number) => void;
  handleGameOver: () => void;
};

function GameScreen({
  pickerNumber,
  handlePickerNumber,
  handleGameOver,
}: Props) {
  const guess = generateRandomNumber(min, max, pickerNumber);
  const [currentGuess, setCurrentGuess] = useState(guess);

  const guessNextNumber = useCallback((direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < pickerNumber) ||
      (direction === "higher" && currentGuess > pickerNumber)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }

    const newGuess = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newGuess);
  }, []);

  useEffect(() => {
    if (currentGuess === pickerNumber) {
      handleGameOver();
    }
  }, [currentGuess, pickerNumber, handleGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.text}>Higher or lower?</Text>
        <View style={styles["buttons-container"]}>
          <Primary onPress={() => guessNextNumber("lower")}>
            <Feather name="minus" size={24} color="white" />
          </Primary>

          <Primary onPress={() => guessNextNumber("higher")}>
            <Feather name="plus" size={24} color="white" />
          </Primary>
        </View>
        <Primary onPress={() => handlePickerNumber(0)}>
          <Feather name="refresh-cw" size={24} color="white" />
        </Primary>
      </View>
      <View>
        <Text style={styles.text}>Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
  },
  "buttons-container": {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.yellow,
    marginTop: 16,
  },
});
