import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/titles/Title";
import { useCallback, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Primary from "../components/ui/buttons/Primary";

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
};

function GameScreen({ pickerNumber, handlePickerNumber }: Props) {
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

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <View>
          <Primary onPress={() => guessNextNumber("lower")}>LOWER</Primary>
          <Primary onPress={() => guessNextNumber("higher")}>HIGHER</Primary>
          <Primary onPress={() => handlePickerNumber(0)}>RETRY</Primary>
        </View>
      </View>
      <View>
        <Text>Rounds</Text>
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
});
