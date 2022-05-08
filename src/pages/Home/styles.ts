import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
    width: '100%',
    height: '100%',

    paddingTop: getStatusBarHeight(),

    alignItems: 'center'
  },

  content: {
    width: '90%',
    height: '100%',

    paddingTop: 56,
    paddingBottom: 56,

    alignItems: 'center',
    justifyContent: 'space-between'
  },

  illustration: {
    width: '100%',
    height: '100%'
  },

  containerButton: {
    width: '100%',
    alignSelf: 'center'
  },

  title: {
    fontSize: theme.fonts.introductionTitleSize,
    textAlign: 'center',
    color: theme.colors.title,
    fontFamily: theme.fonts.introductionTitle
  }
})
