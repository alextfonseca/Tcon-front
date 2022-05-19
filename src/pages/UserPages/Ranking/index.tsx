import React from 'react'
import { ScrollView } from 'react-native'
import { UserLayout } from '../../../Layouts/UserLayout'
import { RankingCard } from '../components/RankingCard'

import { styles } from './styles'

const data = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    city: 'São Paulo',
    claims: '20'
  },

  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    city: 'São Paulo',
    claims: '20'
  },

  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    city: 'São Paulo',
    claims: '20'
  }
]

export const Ranking = () => {
  return (
    <UserLayout title="Ranking" showAddNewButton={true}>
      <ScrollView style={styles.rankingCards}>
        {data.map(item => {
          return (
            <RankingCard
              key={item.id}
              city={item.city}
              id={item.id}
              claims={item.claims}
              imageUrl={item.imageUrl}
            />
          )
        })}
      </ScrollView>
    </UserLayout>
  )
}
