import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    position: 'relative',

    alignItems: 'center'
  },

  content: {
    width: '90%'
  },

  buttons: {
    position: 'absolute',

    bottom: 32,

    width: '100%',

    padding: 20
  },

  title: {
    textAlign: 'center',
    fontSize: theme.fonts.introductionTitleSize,
    fontFamily: theme.fonts.introductionTitle,
    color: theme.colors.title,

    marginTop: 80
  },

  cancelText: {
    textAlign: 'center',

    marginTop: 20,

    color: 'red',

    fontFamily: theme.fonts.text,
    fontSize: theme.fonts.titleSize
  },

  backButton: {
    width: 80,
    height: 80
  }
})
