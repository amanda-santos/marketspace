import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { NativeBaseProvider, StatusBar, Text } from "native-base";

import { Loading } from "@components/Loading";

import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {fontsLoaded ? <Text>Hello</Text> : <Loading />}
    </NativeBaseProvider>
  );
}
