import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import ArrowBack from "../../assets/arrowIcon.svg";
import Illustration from "../../assets/loginIllustration.svg";
import { LoginBox } from "../../components/LoginBox";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// types
import { RootStackParamsList } from "../../@types/navigation";

type userLoginScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Home"
>;

const UserLogin = () => {
  const navigation = useNavigation<userLoginScreenProp>();

  function navigationToHome() {
    navigation.navigate("Home");
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={navigationToHome}>
        <ArrowBack style={styles.backButton} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.illustration}>
          <Illustration />
        </View>

        <LoginBox navigation={navigationToHome} />
      </View>
    </ScrollView>
  );
};

export default UserLogin;
