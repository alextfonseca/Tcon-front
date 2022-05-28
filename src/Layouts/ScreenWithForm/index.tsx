import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/Button'
import { Steps } from '../../pages/UserPages/components/ClaimSteps'

import { styles } from './styles'

interface CreateNewClaimProps {
  children: any
  linkToNextScreen: string
  linkToCancel: string
  title: string
  stepsScreen?: string
}

export const ScreenWithForm = ({
  children,
  linkToNextScreen,
  linkToCancel,
  title,
  stepsScreen
}: CreateNewClaimProps) => {
  const navigation = useNavigation<any>()

  function navigationToNextScreen() {
    navigation.navigate(linkToNextScreen)
  }

  function navigationToCancel() {
    navigation.navigate(linkToCancel)
  }

  return (
    <View style={styles.container}>
      {stepsScreen && <Steps screen={stepsScreen} />}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View>{children}</View>
      </View>

      <View style={styles.buttons}>
        <Button
          text={'Continuar'}
          theme={'primary'}
          functionButton={navigationToNextScreen}
        />

        <TouchableOpacity onPress={navigationToCancel}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
