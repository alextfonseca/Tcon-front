import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    padding: 36,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  step: {
    alignItems: 'center'
  },

  screenActive: {
    backgroundColor: theme.colors.backgroundGreen,
    color: '#fff',
    textAlign: 'center',

    padding: 10,

    width: 40,

    borderRadius: 1000
  },

  screen: {
    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,

    color: theme.colors.backgroundGreen,

    textAlign: 'center',

    padding: 10,

    width: 40,

    borderRadius: 1000
  },

  separator: {
    width: '30%',
    height: 2,
    backgroundColor: theme.colors.backgroundGreen
  },

  text: {
    fontSize: theme.fonts.textSize,
    fontFamily: theme.fonts.text,
    color: theme.colors.text,

    marginTop: 2
  }
})
