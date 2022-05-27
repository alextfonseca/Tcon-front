import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Button } from '../../components/Button'

import { styles } from './styles'

// illustration
import Illustration from '../../assets/homeIllustration.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation<any>()

  function navigateToUserLogin() {
    navigation.navigate('UserLogin')
  }

  function navigateToSponsorLogin() {
    navigation.navigate('SponsorLogin')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />

      <View style={styles.content}>
        <View style={styles.contentIllustration}>
          <Illustration />

          <Text style={styles.title}>
            Como você quer usar nosso aplicativo ?
          </Text>
        </View>

        <View style={styles.containerButton}>
          <Button
            text={'Quero fiscalizar'}
            theme={'primary'}
            functionButton={navigateToUserLogin}
          />
          <Button
            text={'Quero patrocinar'}
            theme={'secondary'}
            functionButton={navigateToSponsorLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
