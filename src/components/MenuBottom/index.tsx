import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button } from '../Button'

import { styles } from './styles'

export function MenuBottom({ setShowMenu, value }: any) {
  function handleShowMenu() {
    setShowMenu(!value)
  }

  const navigation = useNavigation<any>()

  function navigationToUserAccount() {
    navigation.navigate('UserAccount')
  }

  function navigationToExit() {
    navigation.navigate('UserLogin')
  }

  return (
    <View style={styles.container} onTouchEndCapture={handleShowMenu}>
      <View style={styles.content}>
        <Button
          theme={'primary'}
          text={'Sua conta'}
          functionButton={navigationToUserAccount}
        />
        <Button
          theme={'primary'}
          text={'Sair'}
          functionButton={navigationToExit}
        />
      </View>
    </View>
  )
}
