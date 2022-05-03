import React from 'react'

import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ArrowBack from '../../../assets/arrowIcon.svg'
import Illustration from '../../../assets/loginIllustration.svg'

import { LoginBox } from '../../../components/LoginBox'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { styles } from './styles'

// types
import { RootStackParamsList } from '../../../@types/navigation'
type userLoginScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'HomeUser'
>

const UserLogin = () => {
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

        <LoginBox />
      </View>
    </ScrollView>
  )
}

export default UserLogin
