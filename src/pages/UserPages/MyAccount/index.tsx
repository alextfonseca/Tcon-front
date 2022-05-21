import React from 'react'

import { Image, Text, View } from 'react-native'
import { UserLayout } from '../../../Layouts/UserLayout'
import { SponsorInformationCard } from '../../SponsorPages/components/SponsorInformationCard'
import { styles } from './styles'

export const MyAccount = () => {
  return (
    <UserLayout showAddNewButton={false} title={'Minha conta'}>
      <>
        <View style={styles.userData}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'
            }}
          />

          <View>
            <Text style={styles.userName}>Alex Teixeira</Text>
            <Text style={styles.userEmail}>alexatf2014@gmail.com</Text>
          </View>
        </View>

        <View style={styles.loginData}>
          <SponsorInformationCard title={'Login e senha'}>
            <>
              <Text style={styles.loginDataEmail}>alexatf2014@gmail.com</Text>
              <Text style={styles.loginDataPassword}>xxxxxxxxxxxx</Text>
            </>
          </SponsorInformationCard>
        </View>
      </>
    </UserLayout>
  )
}
