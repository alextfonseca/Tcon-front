import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../globals/styles/theme";

export const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),

    width: "90%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerText: {
    color: theme.colors.backgroundWhite,
    fontSize: theme.fonts.pageTitleSize,
    fontFamily: theme.fonts.pageTitle,
  },

  container: {
    height: "100%",
    width: "100%",

    marginTop: 56,
    paddingTop: 46,

    backgroundColor: theme.colors.backgroundWhite,

    alignItems: "center",
  },

  content: {
    width: "90%",

    paddingBottom: 56,
  },

  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderBottomColor: theme.colors.whiteGray,
    borderBottomWidth: 1,

    paddingBottom: 8,
  },

  title: {
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title,
    color: theme.colors.title,
  },

  points: {
    fontSize: theme.fonts.subtitleSize,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.subTitle,
  },

  pointsContainer: {
    marginTop: 32,
  },
});
