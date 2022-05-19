import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

interface StepsProps {
  screen: string
}

export const Steps = ({ screen }: StepsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.step}>
        <Text style={screen === 'theme' ? styles.screenActive : styles.screen}>
          1
        </Text>
        <Text style={styles.text}>Tema</Text>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.step}>
        <Text style={screen === 'about' ? styles.screenActive : styles.screen}>
          2
        </Text>
        <Text style={styles.text}>Sobre</Text>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.step}>
        <Text style={screen === 'local' ? styles.screenActive : styles.screen}>
          3
        </Text>
        <Text style={styles.text}>Local</Text>
      </View>
    </View>
  )
}
