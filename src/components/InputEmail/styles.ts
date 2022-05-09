import { StyleSheet } from 'react-native'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 8,

    marginBottom: 8,

    borderColor: theme.colors.backgroundGreen,
    borderWidth: 1,
    borderRadius: 5
  }
})
