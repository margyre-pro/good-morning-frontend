import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

export interface Collection {
  id: string;
  name: string;
  category: string;
  tag: "Eco-friendly" | "Exclusivité" | "Série Limitée" | string;
  imageSource: any;
}

interface CollectionCardProps {
  collection: Collection;
  onPress: (collection: Collection) => void;
}

export default function CollectionCard({
  collection,
  onPress,
}: CollectionCardProps) {
  if (!collection) return null;

  return (
    <Pressable
      onPress={() => onPress(collection)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* 1. L'IMAGE NETTE DE FOND */}
      <Image
        source={collection.imageSource}
        style={styles.imageBackground}
        resizeMode="cover"
      />

      {/* 2. LE BANDEAU (CONTENEUR DU FLOU) */}
      <View style={styles.overlayContainer}>
        {/* On affiche la MÊME image, mais floutée, décalée pour correspondre au fond */}
        <Image
          source={collection.imageSource}
          style={styles.imageBlurred}
          blurRadius={30} // Augmenté un peu pour un effet "verre" plus pur sans le voile
          resizeMode="cover"
        />

        {/* 3. CONTENU TEXTUEL */}
        <View style={styles.contentRow}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {collection.name ?? "Collection"}
            </Text>
            <Text style={styles.category}>
              {(collection.category ?? "Catégorie").toUpperCase()}
            </Text>
          </View>

          {/* Le Tag avec bordure translucide */}
          <View style={styles.tag}>
            <Text style={styles.tagText}>{collection.tag ?? "Nouveau"}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 461,
    borderRadius: Theme.radius.card,
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
    marginBottom: Theme.spacing.lg,
    position: "relative",
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 121, // Hauteur Figma
    overflow: "hidden", // Important pour couper l'image floue
  },
  imageBlurred: {
    width: "100%",
    height: 461, // Doit faire la hauteur totale de la carte pour s'aligner
    position: "absolute",
    bottom: 0, // Aligné en bas pour que le flou corresponde à l'image du dessous
  },
  // La vue "glassTint" a été supprimée d'ici
  contentRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.md,
    paddingTop: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: Theme.spacing.sm,
  },
  name: {
    ...Theme.typography.t3,
    color: "#FFFFFF",
    marginBottom: 4,
    // Optionnel : Ajoute un léger contour pour la lisibilité
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',
    // textShadowOffset: { width: 0, height: 1 },
    // textShadowRadius: 3,
  },
  category: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: 1.8,
  },
  tag: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)", // Bordure 30% opacité
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  tagText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});
