import colors from "../../../utils/colors";
import { StyleSheet, Text } from "react-native";

type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: colors.yellow,
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.yellow,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
});
