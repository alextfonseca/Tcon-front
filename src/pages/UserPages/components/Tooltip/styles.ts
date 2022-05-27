import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: '#7AD8F5',

    width: 20,
    height: 20,
    borderRadius: 90,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tooltipText: {
    color: '#fff'
  },

  tooltipDescription: {
    position: 'absolute',
    left: 200,
    top: 30,
    backgroundColor: '#7AD8F5',
    padding: 4,
    borderRadius: 2,

    width: 300
  },

  tooltipDescriptionText: {
    color: '#fff'
  }
})
