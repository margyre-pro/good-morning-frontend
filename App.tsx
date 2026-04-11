import React, { useEffect } from "react"; // Ajoute useEffect
import * as NavigationBar from "expo-navigation-bar"; // Importe ça
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </CartProvider>
  );
}
