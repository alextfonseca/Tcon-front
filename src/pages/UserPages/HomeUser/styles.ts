import { StyleSheet } from 'react-native'
import { theme } from '../../../globals/styles/theme'

export const styles = StyleSheet.create({
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomColor: theme.colors.whiteGray,
    borderBottomWidth: 1,

    paddingBottom: 8
  },

  title: {
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title,
    color: theme.colors.title
  },

  points: {
    fontSize: theme.fonts.subtitleSize,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.subTitle
  },

  pointsContainer: {
    marginTop: 32,

    height: '100%'
  }
})
