import { StyleSheet } from 'react-native'
import { theme } from '../../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  title: {
    textAlign: 'center',
    fontSize: theme.fonts.introductionTitleSize,
    fontFamily: theme.fonts.introductionTitle,
    color: theme.colors.title
  }
})
