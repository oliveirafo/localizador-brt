import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./app.routes";
import { useFonts } from 'expo-font';
import { Loading } from "../components/loading";


const Routes = () => {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
    <NavigationContainer>
      { fontsLoaded ? <AppRoutes /> : <Loading /> }
    </NavigationContainer>
  );
};

export default Routes;
