import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    justifyContent: 'space-between'
  },

  title: {
    textAlign: 'center',
    fontSize: theme.fonts.introductionTitleSize,
    fontFamily: theme.fonts.introductionTitle,
    color: theme.colors.title
  },

  input: {
    width: '90%',

    marginTop: '40%',

    alignSelf: 'center',

    height: 50,

    backgroundColor: theme.colors.backgroundWhite,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    borderRadius: 8
  },

  inputArea: {
    width: '90%',

    marginTop: '20%',

    alignSelf: 'center',

    height: 200,

    backgroundColor: theme.colors.backgroundWhite,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    borderRadius: 8
  },

  button: {
    width: '80%',

    justifyContent: 'center',
    alignSelf: 'center',

    paddingBottom: 64
  },

  closeButton: {
    alignSelf: 'center',

    marginTop: 32
  },

  closeButtonText: {
    color: theme.colors.caution,
    fontSize: theme.fonts.titleSize
  }
})
