import React from 'react'

import { TextInput, View } from 'react-native'

import { styles } from './styles'

export const InputPassword = () => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry={true}
      />
    </View>
  )
}
