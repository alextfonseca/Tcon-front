import { Image, Text, TouchableOpacity, View } from "react-native";

import Action from "../../assets/actionIcon.svg";
import { styles } from "./styles";

export const PointsCardHome = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/12/istock-842960000.jpg?quality=70&strip=info&resize=680,453",
          }}
        />

        <View style={styles.content}>
          <View>
            <Text style={styles.local}>Parque ibirapuera</Text>
            <Text style={styles.city}>São Paulo - SP</Text>
          </View>

          <Action />
        </View>
      </View>
    </TouchableOpacity>
  );
};
