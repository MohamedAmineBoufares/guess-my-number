import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Finish = require("../assets/finish-line.jpg");

function GameOverScreen() {
  return (
    <View>
      <Text>GAME OVER!</Text>
      <View>
        <Image source={Finish} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({});
