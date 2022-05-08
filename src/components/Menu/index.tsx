import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

// icons
import HomeIcon from '../../assets/homePageIcon.svg'
import ClaimsIcon from '../../assets/claimsPageIcon.svg'
import RankingIcon from '../../assets/rankingPageIcon.svg'
import SponsorsIcon from '../../assets/sponsorsPageIcon.svg'
import TipsIcon from '../../assets/tipsPageIcon.svg'
import { useNavigation } from '@react-navigation/native'

export const Menu = () => {
  const navigation = useNavigation<any>()

  function navigateToHomeUserPage() {
    navigation.navigate('HomeUser')
  }

  function navigateToClaimPage() {
    navigation.navigate('Claim')
  }

  function navigateToRankingPage() {
    navigation.navigate('Ranking')
  }

  function navigateToSponsorsPage() {
    navigation.navigate('Sponsors')
  }

  function navigateToTipsPage() {
    navigation.navigate('Tips')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToHomeUserPage}
        >
          <HomeIcon />
          <Text style={styles.textButton}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToClaimPage}>
          <ClaimsIcon />
          <Text style={styles.textButton}>Reclamações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToRankingPage}>
          <RankingIcon />
          <Text style={styles.textButton}>Ranking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToSponsorsPage}
        >
          <SponsorsIcon />
          <Text style={styles.textButton}>Patrocinadores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToTipsPage}>
          <TipsIcon />
          <Text style={styles.textButton}>Dicas</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
