import React, { ReactChild, ReactChildren } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../../../../components/Button'
import { styles } from './styles'

interface SponsorInformationCardProps {
  title: string
  children: ReactChild | ReactChildren
}

export const SponsorInformationCard = ({
  title,
  children
}: SponsorInformationCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <View style={styles.content}>{children}</View>

      <Button text={'Editar'} theme={'primary'} />
    </View>
  )
}
