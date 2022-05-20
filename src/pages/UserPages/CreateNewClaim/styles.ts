import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  input: {
    width: '100%',

    marginTop: 180,

    alignSelf: 'center',

    padding: 8,

    height: 50,

    backgroundColor: theme.colors.backgroundWhite,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    borderRadius: 8
  },

  inputArea: {
    width: '100%',

    marginTop: 180,

    textAlignVertical: 'top',

    padding: 8,

    alignSelf: 'center',

    height: 200,

    backgroundColor: theme.colors.backgroundWhite,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    borderRadius: 8
  }
})
