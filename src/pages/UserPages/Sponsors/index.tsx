import React from 'react'
import { ScrollView } from 'react-native'
import { Layout } from '../../../components/Layout'
import { SponsorsCard } from '../../../components/SponsorsCard'

import { styles } from './styles'

const data = [
  {
    id: 1,
    title: 'Mercado São Roque',
    address: 'R. Sotero de Souza, 190',
    local: 'São Roque - SP',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  },
  {
    id: 2,
    title: 'Mercado São Estância',
    address: 'R. Sotero de Souza, 190',
    local: 'São Roque - SP',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  },
  {
    id: 3,
    title: 'Mercado Silva',
    address: 'R. Sotero de Souza, 190',
    local: 'São Roque - SP',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  }
]

export const Sponsors = () => {
  return (
    <Layout title={'Patrocinadores'}>
      <ScrollView style={styles.container}>
        {data.map(item => {
          return (
            <SponsorsCard
              key={item.id}
              address={item.address}
              image={item.imageUrl}
              local={item.local}
              title={item.title}
            />
          )
        })}
      </ScrollView>
    </Layout>
  )
}
