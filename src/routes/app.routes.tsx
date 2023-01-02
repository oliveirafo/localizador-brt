import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importar minhas telas
import Home from "../screens/home";
import Monitor from "../screens/monitor";
import Station from "../screens/station";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false, orientation: 'portrait' }} >
      <Screen name="home" component={Home} />
      <Screen name="monitor" component={Monitor} />
      <Screen name="station" component={Station} />
    </Navigator>
  );
};

export default AppRoutes;
