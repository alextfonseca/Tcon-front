import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../../globals/styles/theme'

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

    marginTop: 18,
    paddingTop: 16,

    paddingBottom: 160,

    backgroundColor: theme.colors.backgroundWhite
  },

  content: {
    width: '90%',
    alignSelf: 'center'
  },

  text: {
    color: theme.colors.title,
    fontFamily: theme.fonts.title,
    fontSize: theme.fonts.pageTitleSize
  },

  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 16
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 1000
  }
})
