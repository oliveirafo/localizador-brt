import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importar minhas telas
import Home from "../screens/home";
import Monitor from "../screens/monitor";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false, orientation: 'portrait' }} >
      <Screen name="home" component={Home} />
      <Screen name="monitor" component={Monitor} />
    </Navigator>
  );
};

export default AppRoutes;
