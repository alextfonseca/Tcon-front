import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -50,

    zIndex: 100000000,

    elevation: 20,
    shadowColor: '#000',

    backgroundColor: theme.colors.backgroundWhite,

    width: '100%',

    marginTop: 22,
    paddingLeft: 16,

    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    paddingTop: 16,
    paddingBottom: 16,
    width: '100%',

    marginLeft: 8,
    color: theme.colors.title,
    fontSize: theme.fonts.placeholderSize,
    fontFamily: theme.fonts.placeholder
  }
})
