import { StatusBar } from "react-native";

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import "./src/lib/dayjs";
import { Routes } from "./src/routes";

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

  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
