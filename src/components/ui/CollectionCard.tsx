// import { BlurView } from "expo-blur"; // disabled — testing expo-blur install
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

// On définit l'interface de façon stricte
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
  // Sécurité : si la donnée est corrompue, on n'affiche rien au lieu de crash
  if (!collection) return null;

  return (
    <Pressable
      onPress={() => onPress(collection)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* L'image est verrouillée en arrière-plan */}
      <Image
        source={collection.imageSource}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Le bandeau d'info avec l'effet flou */}
      <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 }}>
        <View style={styles.contentRow}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {collection.name ?? "Collection"}
            </Text>
            <Text style={styles.category}>
              {(collection.category ?? "Catégorie").toUpperCase()}
            </Text>
          </View>

          {/* Le Tag avec la bordure transparente à 30% */}
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
    height: 461, // Taille fixe Figma
    borderRadius: Theme.radius.card,
    overflow: "hidden",
    backgroundColor: "#1A1A1A", // Fond sombre en cas d'image absente
    marginBottom: Theme.spacing.lg,
    position: "relative",
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  image: {
    ...StyleSheet.absoluteFillObject, // L'image remplit TOUTE la carte
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.lg,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    marginRight: Theme.spacing.sm,
  },
  name: {
    ...Theme.typography.t3,
    color: "#FFFFFF",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  category: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)", // Un poil plus discret que le nom
    letterSpacing: 2,
  },
  tag: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)", // Ta bordure à 30%
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
