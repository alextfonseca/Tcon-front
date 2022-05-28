import React from 'react'

import { TextInput } from 'react-native'

import { ScreenWithForm } from '../../../Layouts/ScreenWithForm'

import { styles } from './styles'

export const Theme = () => {
  return (
    <ScreenWithForm
      linkToNextScreen={'ClaimDescription'}
      linkToCancel={'Reclamações'}
      title={'Qual o tema da reclamação ?'}
      stepsScreen={'theme'}
    >
      <TextInput style={styles.input} placeholder="Tema" />
    </ScreenWithForm>
  )
}
