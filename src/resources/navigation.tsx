import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import UserLogin from '../pages/UserPages/UserLogin'
import { HomeUser } from '../pages/UserPages/HomeUser'
import { Ranking } from '../pages/UserPages/Ranking'
import { Claims } from '../pages/UserPages/Claims'
import { Sponsors } from '../pages/UserPages/Sponsors'
import { Tips } from '../pages/UserPages/Tips'
import SponsorLogin from '../pages/SponsorPages/SponsorLogin'
import { HomeSponsors } from '../pages/SponsorPages/HomeSponsor'
import { Theme } from '../pages/UserPages/CreateNewClaim/theme'
import { Description } from '../pages/UserPages/CreateNewClaim/description'
import { Local } from '../pages/UserPages/CreateNewClaim/local'
import { CreateNewPoint } from '../pages/UserPages/CreatenewPoint'
import { MyAccount } from '../pages/UserPages/MyAccount'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="MyAccount"
      >
        {/* home */}
        <Stack.Screen name="Home" component={Home} />

        {/* login */}
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="SponsorLogin" component={SponsorLogin} />

        {/* usuário */}
        <Stack.Screen name="HomeUser" component={HomeUser} />
        <Stack.Screen name="Ranking" component={Ranking} />
        <Stack.Screen name="Claims" component={Claims} />
        <Stack.Screen name="Sponsors" component={Sponsors} />
        <Stack.Screen name="Tips" component={Tips} />
        <Stack.Screen name="MyAccount" component={MyAccount} />

        {/* patrocinador */}
        <Stack.Screen name="HomeSponsor" component={HomeSponsors} />

        {/* adicionar reclamação */}
        <Stack.Screen name="ClaimTheme" component={Theme} />
        <Stack.Screen name="ClaimDescription" component={Description} />
        <Stack.Screen name="ClaimLocal" component={Local} />

        {/* adicionar ponto de preservação */}
        <Stack.Screen name="CreateNewPoint" component={CreateNewPoint} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
