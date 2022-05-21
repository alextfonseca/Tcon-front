import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScreenWithForm } from '../../../Layouts/ScreenWithForm'

// icons
import AddNewImage from '../../../assets/addNewImageIcon.svg'
import { styles } from './styles'

export const CreateNewPoint = () => {
  return (
    <ScreenWithForm
      linkToNextScreen="/"
      title={'Adicione um novo ponto de preservação'}
    >
      <TouchableOpacity style={styles.addNewImageButton}>
        <AddNewImage />
        <Text style={styles.addNewImageText}>Adicionar imagem</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome do ponto de preservação"
      />

      <View style={styles.selectContainer}>
        <TextInput style={styles.input} placeholder="Estado" />

        <TextInput style={styles.input} placeholder="Cidade" />
      </View>
    </ScreenWithForm>
  )
}
