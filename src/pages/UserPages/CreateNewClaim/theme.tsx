import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../../components/Button'
import { Steps } from '../components/ClaimSteps'
import { styles } from './styles'

export const Theme = () => {
  const navigation = useNavigation<any>()

  function navigationToClaimDescription() {
    navigation.navigate('ClaimDescription')
  }

  function navigationToHomeUser() {
    navigation.navigate('HomeUser')
  }

  return (
    <View style={styles.container}>
      <View>
        <Steps screen={'theme'} />

        <Text style={styles.title}>Qual o tema da sua reclamação ?</Text>

        <TextInput style={styles.input} placeholder="Tema" />
      </View>

      <View style={styles.button}>
        <Button
          text={'Continuar'}
          theme={'primary'}
          functionButton={navigationToClaimDescription}
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
