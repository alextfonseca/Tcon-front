import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',

    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2
  },

  content: {
    width: '100%',
    height: 200,

    justifyContent: 'space-evenly',

    padding: 8,

    backgroundColor: theme.colors.backgroundWhite,

    position: 'absolute',
    bottom: 0,

    borderTopLeftRadius: 8,

    zIndex: 20
  }
})
