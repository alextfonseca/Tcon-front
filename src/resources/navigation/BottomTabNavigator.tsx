import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Feather'
import IoniconsTwo from 'react-native-vector-icons/FontAwesome'

import { HomeUser } from '../../pages/UserPages/HomeUser'
import { Tips } from '../../pages/UserPages/Tips'
import { Claims } from '../../pages/UserPages/Claims'
import { Ranking } from '../../pages/UserPages/Ranking'
import { Sponsors } from '../../pages/UserPages/Sponsors'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#12B232',
        tabBarInactiveTintColor: '#495057',
        headerShown: false
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeUser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Reclamações"
        component={Claims}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IoniconsTwo name="bullhorn" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="award" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Patrocinadores"
        component={Sponsors}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shopping-bag" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Dicas"
        component={Tips}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="smile" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
