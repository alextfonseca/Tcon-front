import React from 'react'

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import { ContainerGreen } from '../../../globals/styles/container'

import Options from '../../../assets/optionsIcon.svg'
import { SearchBox } from '../../../components/SearchBox'
import { PointsCardHome } from '../../../components/PointsCardHome'

export const HomeUser = () => {
  return (
    <ContainerGreen>
      <View style={styles.header}>
        <Text style={styles.headerText}>😁 Olá, Alex</Text>

        <TouchableOpacity>
          <Options />
        </TouchableOpacity>
      </View>

      <SearchBox />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Locais</Text>

            <Text style={styles.points}>10 pontos</Text>
          </View>

          <ScrollView style={styles.pointsContainer}>
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
            <PointsCardHome />
          </ScrollView>
        </View>
      </View>
    </ContainerGreen>
  )
}
