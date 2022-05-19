import React from 'react'

import { TextInput } from 'react-native'

import { ScreenWithForm } from '../../../Layouts/ScreenWithForm'
import { styles } from './styles'

export const Description = () => {
  return (
    <ScreenWithForm linkToNextScreen={'Local'}>
      <TextInput style={styles.inputArea} placeholder="Tema" />
    </ScreenWithForm>
  )
}
