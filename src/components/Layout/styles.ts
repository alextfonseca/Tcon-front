import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),

    width: '90%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerText: {
    color: theme.colors.backgroundWhite,
    fontSize: theme.fonts.pageTitleSize,
    fontFamily: theme.fonts.pageTitle
  },

  container: {
    height: '100%',
    width: '100%',

    marginTop: 18,
    paddingTop: 16,

    backgroundColor: theme.colors.backgroundWhite,

    alignItems: 'center'
  },

  content: {
    width: '90%',

    paddingBottom: 56
  }
})
