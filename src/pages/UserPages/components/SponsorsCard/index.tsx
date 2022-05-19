import React from 'react'

import { Image, Text, View } from 'react-native'
import { Button } from '../../../../components/Button'
import { styles } from './styles'

interface SponsorsCardProps {
  title: string
  image: string
  address: string
  local: string
}

export const SponsorsCard = ({
  title,
  image,
  address,
  local
}: SponsorsCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: `${image}`
          }}
        />

        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.address}>{address}</Text>
          <Text style={styles.local}>{local}</Text>
        </View>
      </View>

      <Button text={'Chegar'} theme={'primary'} />
    </View>
  )
}
