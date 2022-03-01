import { StyleSheet } from "react-native";
import { theme } from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 16,
    paddingBottom: 8,
  },

  image: {
    width: 60,
    height: 60,

    borderRadius: 500000,
  },

  content: {
    width: "70%",

    borderBottomColor: theme.colors.whiteGray,
    borderBottomWidth: 1,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  local: {
    fontFamily: theme.fonts.city,
    fontSize: theme.fonts.citySize,
    color: theme.colors.title,
  },

  city: {
    fontFamily: theme.fonts.text,
    fontSize: theme.fonts.textSize,
    color: theme.colors.text,
  },
});
