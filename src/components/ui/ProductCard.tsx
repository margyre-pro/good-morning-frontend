import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

export interface Product {
  id: string;
  name: string;
  price: string;
  imageSource: any;
}

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable
      onPress={() => onPress(product)}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      {/* 1. IMAGE AVEC DIMENSIONS FIXES FIGMA */}
      <View style={styles.imageContainer}>
        <Image
          source={product.imageSource}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* 2. INFOS EN DESSOUS */}
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 184, // Ta largeur Figma
    marginBottom: Theme.spacing.lg,
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    width: 184,
    height: 272, // Ta hauteur Figma
    borderRadius: Theme.radius.card, // Récupère tes arrondis du Theme
    overflow: "hidden",
    backgroundColor: Theme.colors.grayLight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: Theme.spacing.sm,
    paddingHorizontal: 2, // Petit ajustement pour l'alignement
  },
  name: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.dark,
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    ...Theme.typography.bodySm,
    fontWeight: "600",
    color: Theme.colors.dark,
  },
});
