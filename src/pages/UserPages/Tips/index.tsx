import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { Layout } from '../../../components/Layout'

// icons
import TripIcon from '../../../assets/tripIcon.svg'
import CampIcon from '../../../assets/campIcon.svg'
import CareIcon from '../../../assets/careIcon.svg'
import MoneyIcon from '../../../assets/moneyIcon.svg'
import CameraIcon from '../../../assets/cameraIcon.svg'
import TicketIcon from '../../../assets/ticketIcon.svg'
import LinkIcon from '../../../assets/actionIcon.svg'
import { styles } from './styles'

export const Tips = () => {
  return (
    <Layout title="Dicas">
      <ScrollView>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <TripIcon />
            <Text>Viagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <CampIcon />
            <Text>Acampar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <CareIcon />
            <Text>Cuidados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <MoneyIcon />
            <Text>Economia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <CameraIcon />
            <Text>Fotografia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <LinkIcon style={styles.link} />
            <TicketIcon />
            <Text>Lazer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  )
}
