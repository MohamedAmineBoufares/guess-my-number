import { StyleSheet, SafeAreaView, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./utils/colors";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [pickerNumber, setPickerNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const handlePickerNumber = useCallback((number: number) => {
    setPickerNumber(number);
  }, []);

  const handleGameOver = useCallback((numberOfRounds: number) => {
    setGameIsOver(true);
    setRounds(numberOfRounds);
  }, []);

  const onRestart = useCallback(() => {
    setPickerNumber(0);
    setRounds(0);
    setGameIsOver(false);
  }, []);

  const screen = () => {
    if (pickerNumber) {
      return (
        <GameScreen
          pickerNumber={pickerNumber}
          handlePickerNumber={handlePickerNumber}
          handleGameOver={handleGameOver}
        />
      );
    }

    if (gameIsOver) {
      return (
        <GameOverScreen
          userNumber={pickerNumber}
          rounds={rounds}
          onRestart={onRestart}
        />
      );
    }

    return <StartGameScreen handlePickerNumber={handlePickerNumber} />;
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.gray, "transparent"]}
      onLayout={onLayoutRootView}
    >
      <SafeAreaView style={styles.rootScreen}>{screen()}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
