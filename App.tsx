import { StyleSheet, SafeAreaView, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./utils/colors";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickerNumber, setPickerNumber] = useState(0);

  const handlePickerNumber = useCallback((number: number) => {
    setPickerNumber(number);
  }, []);

  const screen = pickerNumber ? (
    <GameScreen
      pickerNumber={pickerNumber}
      handlePickerNumber={handlePickerNumber}
    />
  ) : (
    <StartGameScreen handlePickerNumber={handlePickerNumber} />
  );

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.gray, "transparent"]}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
