import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Primary from "../components/ui/buttons/Primary";
import colors from "../utils/colors";
import { BlurView } from "expo-blur";
const Finish = require("../assets/finish-line.jpg");

type Props = {
  rounds: number;
  userNumber: number;
  onRestart: () => void;
};

function GameOverScreen({ rounds, userNumber, onRestart }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Finish}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 8, opacity: 0.8 }}
      >
        <BlurView intensity={20} style={styles["blur-container"]} tint="dark">
          <Text style={styles["main-tile"]}>
            Your phone needed <Text>{rounds}</Text> rounds to guess the number{" "}
            {userNumber}
          </Text>

          <View style={styles["buttons-wrapper"]}>
            <View style={styles["button-container"]}>
              <Primary onPress={onRestart}>Start a new game</Primary>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  "main-tile": {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  "blur-container": {
    padding: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  "buttons-wrapper": {
    flexDirection: "row",
    justifyContent: "center",
  },
  "button-container": {
    flex: 1,
  },
});
