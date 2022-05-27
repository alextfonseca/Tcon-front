import React from 'react'
import { View } from 'react-native'
import { Button } from '../../../../components/Button'
import { styles } from './style'

interface MenuUserProps {
  setShowMenu: any
}

export const MenuUser = ({ setShowMenu }: MenuUserProps) => {
  return (
    <View style={styles.menu}>
      <Button text="Sua conta" theme="primary" />
      <Button text="Sair" theme="primary" />
    </View>
  )
}
