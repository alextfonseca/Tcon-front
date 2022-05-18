import React from 'react'

import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ArrowBack from '../../../assets/arrowIcon.svg'
import Illustration from '../../../assets/loginSponsorsIllustration.svg'

import { LoginBox } from '../../../components/LoginBox'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { styles } from './styles'

// types
import { RootStackParamsList } from '../../../@types/navigation'
type userLoginScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'HomeUser'
>

const SponsorLogin = () => {
  const navigation = useNavigation<userLoginScreenProp>()

  function navigationToHome() {
    navigation.navigate('Home')
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={navigationToHome}>
        <ArrowBack style={styles.backButton} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.illustration}>
          <Illustration />
        </View>

        <LoginBox link={'HomeSponsor'} />
      </View>
    </ScrollView>
  )
}

export default SponsorLogin
