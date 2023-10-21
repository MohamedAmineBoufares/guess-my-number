import { Text, View, StyleSheet, ImageBackground } from "react-native";
import colors from "../../utils/colors";

const Paper = require("./../../assets/paper-texture.jpg");

type Props = {
  children: React.ReactNode;
};

function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Paper}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 8, opacity: 0.8 }}
      >
        <Text style={styles["number-text"]}>{children}</Text>
      </ImageBackground>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  image: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  "number-text": {
    color: colors.red[300],
    fontSize: 36,
    fontWeight: "bold",
  },
});
