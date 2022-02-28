import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../@types/navigation";

// types
type userLoginScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "HomeUser"
>;

export const LoginBox = () => {
  const navigation = useNavigation<userLoginScreenProp>();

  function navigateToHomeUser() {
    navigation.navigate("HomeUser");
  }

  return (
    <View style={styles.content}>
      <View style={styles.textContent}>
        <Text style={styles.title}>Login</Text>

        <TouchableOpacity>
          <Text style={styles.buttonText}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        // onChangeText={setEmail}
        autoCompleteType="email"
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        // onChangeText={setPassword}
        placeholder="Senha"
        style={styles.input}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <View style={styles.buttonContent}>
        <Button
          text={"Entrar"}
          theme={"primary"}
          functionButton={navigateToHomeUser}
        />

        <Button text={"Criar uma conta"} theme={"secondary"} />
      </View>
    </View>
  );
};
