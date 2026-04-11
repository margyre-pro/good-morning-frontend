import React, { useEffect } from "react"; // Ajoute useEffect
import * as NavigationBar from "expo-navigation-bar"; // Importe ça
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  useEffect(() => {
    // 1. On rend la barre de navigation Android totalement transparente
    NavigationBar.setBackgroundColorAsync("#ffffff00");

    // 2. On dit à l'app de passer "derrière" la barre Android (mode Edge-to-Edge)
    NavigationBar.setPositionAsync("absolute");

    // 3. Optionnel : On peut cacher la barre si on veut un look ultra épuré
    // NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" translucent={true} />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
