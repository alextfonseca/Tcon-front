import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export const Tooltip = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false)

  function handleTooltip() {
    setIsOpenTooltip(!isOpenTooltip)
  }

  if (!isOpenTooltip) {
    return (
      <TouchableOpacity style={styles.tooltip} onPress={handleTooltip}>
        <Text style={styles.tooltipText}>?</Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <TouchableOpacity style={styles.tooltip} onPress={handleTooltip}>
        <Text style={styles.tooltipText}>?</Text>
      </TouchableOpacity>

      <View style={styles.tooltipDescription}>
        <Text style={styles.tooltipDescriptionText}>
          Pagina com uma lista de pontos de preservação registrados
        </Text>
      </View>
    </>
  )
}
