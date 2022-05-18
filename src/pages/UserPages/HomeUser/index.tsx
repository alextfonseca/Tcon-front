import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { styles } from './styles'

import { SearchBox } from '../../../components/SearchBox'
import { PointsCardHome } from '../../../components/PointsCardHome'
import { Layout } from '../../../components/Layout'

const data = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    name: 'Parque do povo',
    city: 'São Paulo',
    state: 'SP'
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    name: 'Parque do povo',
    city: 'São Paulo',
    state: 'SP'
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80',
    name: 'Parque do povo',
    city: 'São Paulo',
    state: 'SP'
  }
]

export const HomeUser = () => {
  return (
    <Layout
      title="Olá Alex"
      showAddNewButton={true}
      text={'Adicionar novo ponto de preservação'}
      link={'Tips'}
    >
      <>
        <SearchBox />
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Pontos de preservação</Text>

          <Text style={styles.points}>
            {data.length} Pontos de preservação cadastrados
          </Text>
        </View>

        <ScrollView style={styles.pointsContainer}>
          {data.map(item => {
            return (
              <PointsCardHome
                key={item.id}
                image={item.imageUrl}
                name={item.name}
                city={item.city}
                state={item.state}
              />
            )
          })}
        </ScrollView>
      </>
    </Layout>
  )
}
