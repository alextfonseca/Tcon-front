import { TextInput, View } from "react-native";

import { styles } from "./styles";

export const InputEmail = () => {
  return (
    <View>
      <TextInput
        autoCompleteType="email"
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />
    </View>
  );
};
