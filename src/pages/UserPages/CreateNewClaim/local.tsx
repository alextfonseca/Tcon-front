import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../../components/Button'
import { Steps } from '../components/ClaimSteps'
import { styles } from './styles'

export const Local = () => {
  const navigation = useNavigation<any>()

  function navigationToHomeUser() {
    navigation.navigate('HomeUser')
  }

  return (
    <View style={styles.container}>
      <View>
        <Steps screen={'local'} />

        <Text style={styles.title}>
          Conte o que houve para que possamos mandar para as autoridades
        </Text>

        <TextInput style={styles.input} placeholder="Tema" />
      </View>

      <View style={styles.button}>
        <Button
          text={'Continuar'}
          theme={'primary'}
          functionButton={navigationToHomeUser}
        />

        <TouchableOpacity
          style={styles.closeButton}
          onPress={navigationToHomeUser}
        >
          <Text style={styles.closeButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
