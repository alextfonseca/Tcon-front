import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 20,
    bottom: 20,

    right: 20,

    backgroundColor: theme.colors.backgroundGreen,

    flexDirection: 'row',
    alignItems: 'center',

    padding: 16,

    borderRadius: 40
  },

  text: {
    color: theme.colors.backgroundWhite,
    fontSize: 16,
    marginLeft: 8
  }
})
