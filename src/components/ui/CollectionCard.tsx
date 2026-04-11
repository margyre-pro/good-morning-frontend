import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

interface CollectionCardProps {
  name: string;
  category: string;
  tag: string;
  imageSource: any;
  onPress?: () => void;
}

export default function CollectionCard({
  name,
  category,
  tag,
  imageSource,
  onPress,
}: CollectionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* Image nette de fond */}
      <Image
        source={imageSource}
        style={styles.imageBackground}
        resizeMode="cover"
      />

      {/* Bandeau bas avec effet glass (double image floutée) */}
      <View style={styles.overlayContainer}>
        <Image
          source={imageSource}
          style={styles.imageBlurred}
          blurRadius={30}
          resizeMode="cover"
        />

        <View style={styles.contentRow}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.category}>
              {category.toUpperCase()}
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
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
    height: 121,
    overflow: "hidden",
  },
  imageBlurred: {
    width: "100%",
    height: 461,
    position: "absolute",
    bottom: 0,
  },
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
  },
  category: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: 1.8,
  },
  tag: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
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
