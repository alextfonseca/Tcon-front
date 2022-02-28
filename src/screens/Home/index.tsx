import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

import { styles } from "./styles";

// illustration
import Illustration from "../../assets/homeIllustration.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// types
import { RootStackParamsList } from "../../@types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Home">;

export default function Home() {
  const navigation = useNavigation<homeScreenProp>();

  function navigateToOversee() {
    navigation.navigate("UserLogin");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />

      <View style={styles.content}>
        <View>
          <Illustration style={styles.illustration} />
        </View>

        <Text style={styles.title}>Como você quer usar nosso aplicativo ?</Text>

        <View style={styles.containerButton}>
          <Button
            text={"Quero fiscalizar"}
            theme={"primary"}
            functionButton={navigateToOversee}
          />
          <Button
            text={"Quero patrocinar"}
            theme={"secondary"}
            functionButton={navigateToOversee}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
