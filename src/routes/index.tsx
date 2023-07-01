import { NavigationContainer } from "@react-navigation/native";
import { THEME } from "@styles/theme";

import { View } from "react-native";

import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.BACKGROUND_DARK }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
