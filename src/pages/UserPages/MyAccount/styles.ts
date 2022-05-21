import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  userData: {
    marginTop: 56,

    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between'
  },

  image: {
    width: 100,
    height: 100,

    borderRadius: 90000
  },

  userName: {
    color: theme.colors.title,
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title
  },

  userEmail: {
    color: theme.colors.text,
    fontSize: theme.fonts.textSize,
    fontFamily: theme.fonts.title
  },

  loginData: {
    marginTop: 32
  },

  loginDataEmail: {
    color: theme.colors.title,
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title
  },

  loginDataPassword: {
    color: theme.colors.text,
    fontSize: theme.fonts.titleSize,
    fontFamily: theme.fonts.title,

    margin: 8
  }
})
