import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  theme: string;
  navigateTo?: string;
  navigation?: any;
}

export const Button = ({
  text,
  theme,
  navigateTo,
  navigation,
}: ButtonProps) => {
  function navigateToUserLogin() {
    navigation.navigate(`${navigateTo}`);
  }

  if (theme == "primary") {
    return (
      <>
        <TouchableOpacity style={styles.primary} onPress={navigateToUserLogin}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </>
    );
  } else {
    return (
      <>
        <TouchableOpacity style={styles.secondary}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </>
    );
  }
};
