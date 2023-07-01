import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { THEME } from "@styles/theme";

import { StatusBar, StyleSheet, View } from "react-native";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_DARK,
  },
});
