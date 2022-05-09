import React from 'react'
import { ScrollView } from 'react-native'

import { Button } from '../../../components/Button'
import { ClaimCard } from '../../../components/ClaimCard'
import { styles } from './styles'
import { Layout } from '../../../components/Layout'

const data = [
  {
    id: 1,
    title: 'Muito lixo no parque',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    local: 'Parque ibirapuera',
    date: '18/01/2022',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  },
  {
    id: 2,
    title: 'Muito lixo no parque',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    local: 'Parque ibirapuera',
    date: '18/01/2022',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  },
  {
    id: 3,
    title: 'Muito lixo no parque',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    local: 'Parque ibirapuera',
    date: '18/01/2022',
    imageUrl:
      'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
  }
]

export const Claims = () => {
  return (
    <Layout title="Reclamações">
      <>
        <Button text="Fazer reclamação" theme="primary" />

        <ScrollView style={styles.container}>
          {data.map(item => {
            return (
              <ClaimCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.imageUrl}
                date={item.date}
                local={item.local}
              />
            )
          })}
        </ScrollView>
      </>
    </Layout>
  )
}
