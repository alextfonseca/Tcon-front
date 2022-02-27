import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  theme: string;
  navigateTo?: () => void;
}

export const Button = ({ text, theme, navigateTo }: ButtonProps) => {
  if (theme == "primary") {
    return (
      <>
        <TouchableOpacity style={styles.primary} onPress={navigateTo}>
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
