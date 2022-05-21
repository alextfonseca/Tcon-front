import React from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { styles } from './styles'

import Search from '../../../assets/searchIcon.svg'
import { PointsCardHome } from '../components/PointsCardHome'
import { UserLayout } from '../../../Layouts/UserLayout'

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
    <UserLayout
      title="Olá Alex"
      showAddNewButton={true}
      text={'Adicionar novo ponto de preservação'}
      link={'CreateNewPoint'}
    >
      <>
        <View style={styles.searchBox}>
          <TouchableOpacity>
            <Search />
          </TouchableOpacity>

          <TextInput
            style={styles.searchBoxInput}
            placeholder="Pesquise por nome ou local"
          />
        </View>

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
    </UserLayout>
  )
}
