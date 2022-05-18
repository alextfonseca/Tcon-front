import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { ContainerGreen } from '../../../globals/styles/container'
import { styles } from './styles'

// icons
import ExitIcon from '../../../assets/exitIcon.svg'
import { SponsorInformationCard } from '../../../components/SponsorInformationCard'
import { useNavigation } from '@react-navigation/native'

export const HomeSponsors = () => {
  const navigation = useNavigation<any>()

  function navigationToHome() {
    navigation.navigate('Home')
  }
  return (
    <ContainerGreen>
      <View style={styles.header}>
        <Text style={styles.headerText}>😁 Olá, Patrocinador</Text>

        <TouchableOpacity>
          <ExitIcon onPress={navigationToHome} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <SponsorInformationCard title={'Sobre'}>
              <View style={styles.contentCard}>
                <Text style={styles.text}>Supermercado São Roque</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`
                  }}
                />
              </View>
            </SponsorInformationCard>

            <SponsorInformationCard title={'Contato'}>
              <View style={styles.contentCard}>
                <Text style={styles.text}>(11) 4141-4141</Text>
                <Text style={styles.text}>(11) 94141-4141</Text>
              </View>
            </SponsorInformationCard>

            <SponsorInformationCard title={'C.N.P.J'}>
              <View style={styles.contentCard}>
                <Text style={styles.text}>45.416.131/0001-92</Text>
              </View>
            </SponsorInformationCard>

            <SponsorInformationCard title={'C.N.P.J'}>
              <View style={styles.contentCard}>
                <Text style={styles.text}>Rua São Paulo</Text>
                <Text style={styles.text}>4040</Text>
                <Text style={styles.text}>Vila nova</Text>
                <Text style={styles.text}>São Roque </Text>
                <Text style={styles.text}>São Paulo</Text>
              </View>
            </SponsorInformationCard>

            <SponsorInformationCard title={'Login e senha'}>
              <View style={styles.contentCard}>
                <Text style={styles.text}>mercado@contato.com</Text>
                <Text style={styles.text}>XXXXXXXXX</Text>
              </View>
            </SponsorInformationCard>
          </ScrollView>
        </View>
      </View>
    </ContainerGreen>
  )
}
