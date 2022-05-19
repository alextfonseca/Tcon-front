import { StyleSheet } from 'react-native'
import { theme } from '../../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,

    borderRadius: 8,

    backgroundColor: theme.colors.grayCard,

    padding: 16
  },

  link: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  title: {
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title,

    textAlign: 'center'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerItemText: {
    marginLeft: 8,
    fontSize: theme.fonts.subtitleSize,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.subTitle
  },

  description: {
    marginTop: 8,
    fontSize: theme.fonts.subtitleSize,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.subTitle
  },

  image: {
    width: '100%',
    height: 200,

    marginTop: 16,

    borderRadius: 8
  }
})
