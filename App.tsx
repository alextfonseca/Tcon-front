import React from 'react'

import { useFonts } from 'expo-font'

import {
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
  Nunito_300Light
} from '@expo-google-fonts/nunito'

import {
  Raleway_300Light,
  Raleway_400Regular
} from '@expo-google-fonts/raleway'

import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './src/resources/navigation/Navigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
    Nunito_300Light,
    Raleway_300Light,

    Raleway_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </>
    )
  }
}
