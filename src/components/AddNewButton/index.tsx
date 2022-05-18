import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

// icons
import MoreIcon from '../../assets/moreIcon.svg'
import { styles } from './styles'

interface AddNewButtonProps {
  text: string | undefined
  link: string | undefined
}

export const AddNewButton = ({ text, link }: AddNewButtonProps) => {
  const [showTextButton, setShowTextButton] = useState(false)

  const navigation = useNavigation<any>()

  function handleShowTextButton() {
    if (showTextButton) {
      navigation.navigate(link)
      setShowTextButton(false)
    } else {
      setShowTextButton(!showTextButton)
    }
  }

  return (
    <TouchableOpacity onPress={handleShowTextButton} style={styles.button}>
      <MoreIcon />
      {showTextButton && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  )
}
