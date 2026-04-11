import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

interface ProductCardProps {
  name: string;
  price: string;
  imageSource: any;
  onPress?: () => void;
}

export default function ProductCard({
  name,
  price,
  imageSource,
  onPress,
}: ProductCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // le parent contrôle la largeur
    marginBottom: Theme.spacing.lg,
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 184 / 272, // proportions Figma conservées
    borderRadius: Theme.radius.card,
    overflow: "hidden",
    backgroundColor: Theme.colors.grayLight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: Theme.spacing.sm,
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
