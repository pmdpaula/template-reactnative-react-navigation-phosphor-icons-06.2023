import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Screen01 } from "@screens/Screen01";
import { Screen02 } from "@screens/Screen02";
import { Screen03 } from "@screens/Screen03";
import { Screen04 } from "@screens/Screen04";

type AppRoutesProps = {
  home: undefined;
  screen01: undefined;
  screen02: undefined;
  screen03: undefined;
  screen04: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="screen01"
        component={Screen01}
      />
      <Screen
        name="screen02"
        component={Screen02}
      />
      <Screen
        name="screen03"
        component={Screen03}
      />
      <Screen
        name="screen03"
        component={Screen04}
      />
    </Navigator>
  );
};
