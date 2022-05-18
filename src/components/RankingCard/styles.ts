import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  classification: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.subTitle
  },

  cityName: {
    fontSize: 25,
    fontFamily: theme.fonts.title,
    color: theme.colors.title
  },

  claims: {
    fontSize: theme.fonts.claimTextSize,
    fontFamily: theme.fonts.claimText,
    color: theme.colors.text
  },

  image: {
    width: 60,
    height: 60,

    borderRadius: 100,

    margin: 8
  }
})
