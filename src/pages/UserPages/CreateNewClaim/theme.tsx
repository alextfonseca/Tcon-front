import React from 'react'

import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../../components/Button'
import { Steps } from '../../../components/ClaimSteps'
import { styles } from './styles'

export const Theme = () => {
  return (
    <View style={styles.container}>
      <Steps screen={'theme'} />

      <Text style={styles.title}>Qual o tema da sua reclamação ?</Text>

      <TextInput placeholder="Tema" />

      <View>
        <Button text={'Continuar'} theme={'primary'} />

        <TouchableOpacity>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
