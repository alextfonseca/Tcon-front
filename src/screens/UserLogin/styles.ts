import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
    width: "100%",
    height: "100%",

    paddingBottom: 56,

    paddingTop: getStatusBarHeight(),
  },

  content: {
    width: "90%",
    height: "100%",

    paddingTop: 56,
    paddingBottom: 56,

    alignSelf: "center",
    justifyContent: "space-between",
  },

  backButton: {
    margin: 8,
  },

  illustration: {
    alignItems: "center",
  },
});
