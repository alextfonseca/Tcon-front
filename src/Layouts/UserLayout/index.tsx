import React, { ReactChild, ReactChildren } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ContainerGreen } from '../../styles/container'

// icons
import Options from '../../assets/optionsIcon.svg'
import { Menu } from '../../components/Menu'
import { styles } from './styles'
import { AddNewButton } from '../../components/AddNewButton'

interface AuxProps {
  children: ReactChild | ReactChildren
  title: string
  showAddNewButton: boolean
  link?: string
  text?: string
}

export const UserLayout = ({
  children,
  title,
  link,
  text,
  showAddNewButton
}: AuxProps) => {
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

      {showAddNewButton && <AddNewButton text={text} link={link} />}

      <Menu />
    </ContainerGreen>
  )
}
