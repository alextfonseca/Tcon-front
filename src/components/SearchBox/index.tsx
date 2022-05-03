import React from 'react'

import { TextInput, TouchableOpacity, View } from 'react-native'

import Search from '../../assets/searchIcon.svg'

import { styles } from './styles'

export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Search />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Pesquise por nome ou local"
      />
    </View>
  )
}
