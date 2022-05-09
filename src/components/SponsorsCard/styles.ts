import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,

    borderRadius: 8,

    backgroundColor: theme.colors.grayCard,

    padding: 16
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 24
  },

  image: {
    width: 100,
    height: 100,

    borderRadius: 8
  },

  text: {
    marginLeft: 16
  },

  title: {
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title,
    color: theme.colors.title
  },

  address: {
    marginTop: 16,
    fontFamily: theme.fonts.text,
    fontSize: 14,
    color: theme.colors.subTitle
  },

  local: {
    fontFamily: theme.fonts.text,
    fontSize: 14,
    color: theme.colors.subTitle
  }
})
