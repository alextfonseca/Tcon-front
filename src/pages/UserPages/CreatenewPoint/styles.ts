import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  addNewImageButton: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 100
  },

  addNewImageText: {
    color: theme.colors.text,
    fontSize: theme.fonts.textSize,
    fontFamily: theme.fonts.text
  },

  input: {
    width: '100%',

    marginTop: 56,

    alignSelf: 'center',

    padding: 8,

    height: 50,

    backgroundColor: theme.colors.backgroundWhite,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    borderRadius: 8
  },

  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 270
  }
})
