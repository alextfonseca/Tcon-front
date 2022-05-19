import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: theme.colors.backgroundGreen,

    padding: 10,
    borderRadius: 5,

    alignItems: 'center'
  },

  secondary: {
    backgroundColor: theme.colors.darkGray,

    alignItems: 'center',

    padding: 10,
    borderRadius: 5,

    marginTop: 8
  },

  text: {
    color: theme.colors.backgroundWhite,
    fontFamily: theme.fonts.button,
    fontSize: theme.fonts.buttonSize
  }
})
