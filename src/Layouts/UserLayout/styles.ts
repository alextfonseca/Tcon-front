import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../styles/theme'

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
    width: '100%',
    height: '100%',

    marginTop: 32,

    paddingBottom: 160,

    backgroundColor: theme.colors.backgroundWhite
  },

  content: {
    width: '90%',
    alignSelf: 'center'
  }
})
