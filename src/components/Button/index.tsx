import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamsList } from "../../@types/navigation";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  theme: string;
  functionButton?: () => void;
}

export const Button = ({ text, theme, functionButton }: ButtonProps) => {
  if (theme == "primary") {
    return (
      <>
        <TouchableOpacity style={styles.primary} onPress={functionButton}>
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
