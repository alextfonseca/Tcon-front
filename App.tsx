import { useFonts } from "expo-font";

import {
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";

import {
  Raleway_300Light,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import { Navigation } from "./src/components/Navigation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
    Raleway_300Light,
    Raleway_400Regular,
  });

  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Navigation />
      </>
    );
  }
}
