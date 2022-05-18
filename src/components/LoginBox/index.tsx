import React from 'react'

import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../Button'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

interface LoginBoxProps {
  link: string
}

export const LoginBox = ({ link }: LoginBoxProps) => {
  const navigation = useNavigation<any>()

  function navigateToPage() {
    navigation.navigate(link)
  }

  return (
    <View style={styles.content}>
      <View style={styles.textContent}>
        <Text style={styles.title}>Login</Text>
      </View>

      <TextInput
        // onChangeText={setEmail}
        autoCompleteType="email"
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        // onChangeText={setPassword}
        placeholder="Senha"
        style={styles.input}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContent}>
        <Button
          text={'Entrar'}
          theme={'primary'}
          functionButton={navigateToPage}
        />

        <Button text={'Criar uma conta'} theme={'secondary'} />
      </View>
    </View>
  )
}
