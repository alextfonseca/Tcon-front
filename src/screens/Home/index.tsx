import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

import { styles } from "./styles";

// illustration
import Illustration from "../../assets/homeIllustration.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }: any) {
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
            navigateTo={"UserLogin"}
            navigation={navigation}
          />
          <Button text={"Quero patrocinar"} theme={"secondary"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
