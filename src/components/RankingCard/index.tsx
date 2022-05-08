import React from 'react'

import { Image, Text, View } from 'react-native'
import { styles } from './styles'

// import { styles } from './styles'

interface RankingCardProps {
  id: number
  imageUrl: string
  city: string
  claims: string
}

export const RankingCard = ({
  id,
  imageUrl,
  city,
  claims
}: RankingCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.classification}>{id}</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
          }}
        />

        <Text style={styles.cityName}>{city}</Text>
      </View>

      <Text style={styles.claims}>{claims} Reclamações</Text>
    </View>
  )
}
