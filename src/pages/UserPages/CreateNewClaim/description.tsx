import React from 'react'

import { TextInput } from 'react-native'

import { ScreenWithForm } from '../../../Layouts/ScreenWithForm'
import { styles } from './styles'

export const Description = () => {
  return (
    <ScreenWithForm
      linkToNextScreen={'ClaimLocal'}
      title={'Conte o que houve para que possamos mandar para as autoridades'}
      stepsScreen={'about'}
    >
      <TextInput
        style={styles.inputArea}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={10}
      />
    </ScreenWithForm>
  )
}
