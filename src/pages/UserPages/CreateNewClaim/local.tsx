import React from 'react'

import { TextInput } from 'react-native'
import { ScreenWithForm } from '../../../Layouts/ScreenWithForm'

import { styles } from './styles'

export const Local = () => {
  return (
    <ScreenWithForm
      stepsScreen={'local'}
      linkToCancel={'Reclamações'}
      linkToNextScreen={'Claims'}
      title={'Qual foi o local ?'}
    >
      <TextInput style={styles.input} placeholder="Parque do povo" />
    </ScreenWithForm>
  )
}
