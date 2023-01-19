import { useEffect } from "react";
import { StatusBar } from "react-native";

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import LogRocket from "@logrocket/react-native";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoading] = useFonts({
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (__DEV__) {
    import("./ReactotronConfig").then(() =>
      console.log("Reactotron Configured")
    );
  }

  if (fontsLoading) {
    return <Loading />;
  }

  useEffect(() => {
    LogRocket.init("uv2oqm/fifine");
  }, []);

  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
