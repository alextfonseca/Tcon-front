import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomColor: theme.colors.whiteGray,
    borderBottomWidth: 1,

    paddingTop: 60,

    paddingBottom: 8
  },

  searchBox: {
    position: 'absolute',
    top: -50,

    zIndex: 100,

    elevation: 20,
    shadowColor: '#000',

    backgroundColor: theme.colors.backgroundWhite,

    width: '100%',

    marginTop: 22,
    paddingLeft: 16,

    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center'
  },

  searchBoxInput: {
    paddingTop: 16,
    paddingBottom: 16,
    width: '100%',

    marginLeft: 8,
    color: theme.colors.title,
    fontSize: theme.fonts.placeholderSize,
    fontFamily: theme.fonts.placeholder
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
