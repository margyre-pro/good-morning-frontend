import React from "react";
import { StyleSheet, View } from "react-native";
import ProductCard, { Product } from "../components/ui/ProductCard";
import { Theme } from "../constants/Theme";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tahnyc Sérum",
    price: "34,99 €",
    imageSource: require("../../assets/images/products/Tahnyc-brand.webp"),
  },
  {
    id: "2",
    name: "Lumio Glow",
    price: "29,00 €",
    imageSource: require("../../assets/images/products/Lumio-brand.webp"),
  },
  {
    id: "3",
    name: "Brom & Jakobsen",
    price: "42,00 €",
    imageSource: require("../../assets/images/products/Brom-Jakobsen-brand.webp"),
  },
  {
    id: "4",
    name: "Morning Glow I",
    price: "19,90 €",
    imageSource: require("../../assets/images/products/GM1.webp"),
  },
  {
    id: "5",
    name: "Morning Glow II",
    price: "22,50 €",
    imageSource: require("../../assets/images/products/GM2.webp"),
  },
  {
    id: "6",
    name: "Morning Glow III",
    price: "24,00 €",
    imageSource: require("../../assets/images/products/GM3.webp"),
  },
];

// Composant embarquable dans un ScrollView parent — pas de FlatList ici
export default function ProductGridScreen() {
  return (
    <View style={styles.grid}>
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={(p) => console.log("Produit sélectionné :", p.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.md,
  },
});
