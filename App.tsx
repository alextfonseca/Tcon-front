import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import { Navigation } from "./src/components/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
  });

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
