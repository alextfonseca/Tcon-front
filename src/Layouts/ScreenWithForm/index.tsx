import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/Button'
import { Steps } from '../../pages/UserPages/components/ClaimSteps'
import { styles } from './styles'

interface CreateNewClaimProps {
  children: any
  linkToNextScreen: string
}

export const ScreenWithForm = ({
  children,
  linkToNextScreen
}: CreateNewClaimProps) => {
  const navigation = useNavigation<any>()

  function navigationToHomeUser() {
    navigation.navigate('HomeUser')
  }

  return (
    <View style={styles.container}>
      <Steps screen={'about'} />

      <Text>
        Conte o que houve para que possamos mandar para as autoridades
      </Text>

      <View>{children}</View>

      <View>
        <Button text={'Continuar'} theme={'primary'} />

        <TouchableOpacity onPress={navigationToHomeUser}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
