import React, { useState } from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'

// icons
import LocalIcon from '../../../../assets/localIcon.svg'
import DateIcon from '../../../../assets/dateIcon.svg'
import LinkIcon from '../../../../assets/actionIcon.svg'

import { styles } from './styles'

interface ClaimCardProps {
  title: string
  local: string
  date: string
  image: string
  description: string
}

export const ClaimCard = ({
  title,
  local,
  date,
  image,
  description
}: ClaimCardProps) => {
  const [showDescription, setShowDescription] = useState(false)

  function handleShowDescription() {
    setShowDescription(!showDescription)
  }

  if (showDescription) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={handleShowDescription}
      >
        <LinkIcon style={styles.link} />
        <Text style={styles.title}>{title}</Text>

        <View style={styles.header}>
          <View style={styles.headerItem}>
            <LocalIcon />
            <Text style={styles.headerItemText}>{local}</Text>
          </View>

          <View style={styles.headerItem}>
            <DateIcon />
            <Text style={styles.headerItemText}>{date}</Text>
          </View>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: `${image}`
          }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowDescription}>
      <LinkIcon style={styles.link} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.header}>
        <View style={styles.headerItem}>
          <LocalIcon />
          <Text style={styles.headerItemText}>{local}</Text>
        </View>

        <View style={styles.headerItem}>
          <DateIcon />
          <Text style={styles.headerItemText}>{date}</Text>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>

      <Image
        source={{
          uri: `${image}`
        }}
      />
    </TouchableOpacity>
  )
}
