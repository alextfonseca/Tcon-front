import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { InputPassword } from "../InputPassword";
import { InputEmail } from "../InputEmail";
import { styles } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

interface LoginBoxProps {
  navigation: () => void;
}

export const LoginBox = ({ navigation }: LoginBoxProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const data = {
      email,
      password,
    };

    try {
      await api
        .post("signin", data)
        .then((response) => console.warn(response.data));
    } catch (error) {
      console.warn(error);
    }
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
        onChangeText={setEmail}
        autoCompleteType="email"
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        onChangeText={setPassword}
        placeholder="Senha"
        style={styles.input}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <View style={styles.buttonContent}>
        <Button
          text={"Entrar"}
          theme={"primary"}
          functionButton={handleLogin}
        />

        <Button text={"Criar uma conta"} theme={"secondary"} />
      </View>
    </View>
  );
};
