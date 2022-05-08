import React, { ReactChild, ReactChildren } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ContainerGreen } from '../../globals/styles/container'

// icons
import Options from '../../assets/optionsIcon.svg'
import { Menu } from '../Menu'
import { styles } from './styles'

interface AuxProps {
  children: ReactChild | ReactChildren
  title: string
}

export const Layout = ({ children, title }: AuxProps) => {
  return (
    <ContainerGreen>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>

        <TouchableOpacity>
          <Options />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>

      <Menu />
    </ContainerGreen>
  )
}
