import React, {useState, useEffect} from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import axios from 'axios';

import { styles } from "./styles";

import { ContainerGreen } from "../../../globals/styles/container";

import Options from "../../../assets/optionsIcon.svg";
import { SearchBox } from "../../../components/SearchBox";
import { PointsCardHome } from "../../../components/PointsCardHome";

interface Place {
  name: string,
  city: string,
  state: string,
  id: string,
  image: string
}


export const HomeUser = () => {
  const [place, setPlace] = useState<Place[]>([])
  
  useEffect(() => {
    axios.get('http://192.168.200.6:8000/place')
    .then((res) => {
      setPlace(res.data)
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <ContainerGreen>
      <View style={styles.header}>
        <Text style={styles.headerText}>😁 Olá, Alex</Text>

        <TouchableOpacity>
          <Options />
        </TouchableOpacity>
      </View>

      <SearchBox />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Locais</Text>

            <Text style={styles.points}>{place.length} pontos</Text>
          </View>

          <ScrollView style={styles.pointsContainer}>
            {
              place.map((element:Place) => {
                return <PointsCardHome key={element.id} image={element.image} name={element.name} city={element.city} state={element.state}/> 
              })
            }
          </ScrollView>
        </View>
      </View>
    </ContainerGreen>
  );
};
