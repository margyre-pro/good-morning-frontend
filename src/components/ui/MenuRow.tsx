import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Theme } from "../../constants/Theme";

interface MenuRowProps {
  label: string;
  icon?: string; // Si tu veux mettre un emoji ou une icône Lucide
  onPress: () => void;
}

export const MenuRow = ({ label, icon, onPress }: MenuRowProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? Theme.colors.grayLight : "transparent" },
      ]}
    >
      <View style={styles.leftContent}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={styles.label}>{label}</Text>
      </View>

      <ChevronRight size={24} color={Theme.colors.dark} strokeWidth={1.5} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.grayLight, // La petite ligne grise que l'on voit sur ton image
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    marginRight: Theme.spacing.sm,
  },
  label: {
    ...Theme.typography.t4, // Utilisation de tes styles de texte
    color: Theme.colors.dark,
  },
});
