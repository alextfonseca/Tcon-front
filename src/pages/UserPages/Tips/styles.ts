import { StyleSheet } from 'react-native'
import { theme } from '../../../globals/styles/theme'

export const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    marginTop: 16
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 16,
    backgroundColor: theme.colors.grayCard,

    width: 150,
    height: 150,

    borderRadius: 8
  },

  link: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})
