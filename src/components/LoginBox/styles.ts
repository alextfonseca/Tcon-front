import { StyleSheet } from "react-native";
import { theme } from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  textContent: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 16,
  },

  title: {
    color: theme.colors.title,
    fontFamily: theme.fonts.title,
    fontSize: theme.fonts.titleSize,
  },

  buttonText: {
    textDecorationLine: "underline",
    color: theme.colors.text,
    fontSize: theme.fonts.placeholderSize,
    fontFamily: theme.fonts.placeholder,
  },
});
