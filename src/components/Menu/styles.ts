import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    paddingBottom: 18,
    paddingTop: 18,

    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: '#fff',

    alignSelf: 'center',
    display: 'flex',

    position: 'absolute',
    bottom: 0,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3
  },

  content: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: theme.fonts.textMenuSize,
    fontFamily: theme.fonts.textMenu,
    color: theme.colors.text
  }
})
