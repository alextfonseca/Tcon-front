import { StyleSheet } from 'react-native'
import { theme } from '../../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    padding: 16,

    borderRadius: 8
  },
  content: {
    marginTop: 8
  },

  text: {
    fontFamily: theme.fonts.text,
    fontSize: theme.fonts.textSize,
    color: theme.colors.text
  }
})
