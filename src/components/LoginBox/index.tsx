import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { InputPassword } from "../InputPassword";
import { InputEmail } from "../InputEmail";
import { styles } from "./styles";

interface LoginBoxProps {
  navigation: () => void;
}

export const LoginBox = ({ navigation }: LoginBoxProps) => {
  return (
    <View>
      <View style={styles.textContent}>
        <Text style={styles.title}>Login</Text>

        <TouchableOpacity>
          <Text style={styles.buttonText}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>

      <InputEmail />

      <InputPassword />

      <Button navigateTo={navigation} text={"Entrar"} theme={"primary"} />
      <Button
        navigateTo={navigation}
        text={"Criar uma conta"}
        theme={"secondary"}
      />
    </View>
  );
};
