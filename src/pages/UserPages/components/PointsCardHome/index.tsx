import React from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import Action from '../../../../assets/actionIcon.svg'
import { styles } from './styles'

interface Place {
  name: string
  city: string
  state: string
  image: string
}

export const PointsCardHome = ({ state, image, name, city }: Place) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${image}`
          }}
        />

        <View style={styles.content}>
          <View>
            <Text style={styles.local}>{name}</Text>
            <Text style={styles.city}>
              {city} - {state}
            </Text>
          </View>

          <Action />
        </View>
      </View>
    </TouchableOpacity>
  )
}
