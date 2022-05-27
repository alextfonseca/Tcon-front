import React, { ReactChild, ReactChildren, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ContainerGreen } from '../../styles/container'

// icons
import Options from '../../assets/optionsIcon.svg'
import { styles } from './styles'
import { AddNewButton } from '../../components/AddNewButton'
import { MenuBottom } from '../../components/MenuBottom'

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
  const [showMenu, setShowMenu] = useState(false)

  function handleShowMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <ContainerGreen>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>

          <TouchableOpacity onPress={handleShowMenu}>
            <Options />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>{children}</View>
        </View>

        {showAddNewButton && <AddNewButton text={text} link={link} />}
      </ContainerGreen>

      {showMenu && <MenuBottom setShowMenu={setShowMenu} value={showMenu} />}
    </>
  )
}
