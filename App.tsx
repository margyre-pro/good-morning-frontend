import React, { useEffect } from "react"; // Ajoute useEffect
import * as NavigationBar from "expo-navigation-bar"; // Importe ça
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" translucent={true} />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
