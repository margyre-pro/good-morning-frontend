import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronRight } from "lucide-react-native";
import { Theme } from "../constants/Theme";

export default function ProfileScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();

  const menuItems = [
    { label: "👀 Besoin d’aide ?", route: "Help" },
    { label: "📝 Mes informations", route: null },
    { label: "☀️ Mes commandes", route: null },
    { label: "👋 Besoin d’aide ?", route: "Help" }, // Doublon maquette 07
  ];

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: Math.max(insets.top + 24, 52),
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.title}>Mon Profil</Text>
        <View style={styles.divider} />

        {menuItems.map((item, index) => (
          <View key={index}>
            <Pressable
              style={styles.menuItem}
              onPress={() => item.route && navigation.navigate(item.route)}
            >
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight size={20} color={Theme.colors.dark} />
            </Pressable>
            {index < menuItems.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Theme.colors.white },
  title: { ...Theme.typography.t1, marginBottom: 16 },
  divider: { height: 1, backgroundColor: Theme.colors.dark, marginBottom: 32 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  menuLabel: { ...Theme.typography.bodyLg, color: Theme.colors.dark },
  separator: { height: 0.5, backgroundColor: Theme.colors.grayLight },
});
