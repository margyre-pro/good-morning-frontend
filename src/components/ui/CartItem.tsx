import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ChevronDown, X } from "lucide-react-native";
import { Theme } from "../../constants/Theme";

interface CartItemProps {
  title: string;
  price: string;
  quantity: string;
  imageSource: any;
  onRemove: () => void;
}

export function CartItem({ title, price, quantity, imageSource, onRemove }: CartItemProps) {
  return (
    <View style={styles.container}>
      {/* Left — product image */}
      <Image source={imageSource} style={styles.image} resizeMode="cover" />

      {/* Right — info */}
      <View style={styles.info}>

        {/* Top row: title + remove */}
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <Pressable onPress={onRemove} hitSlop={8} style={styles.removeBtn}>
            <X size={18} color={Theme.colors.grayMid} strokeWidth={1.5} />
          </Pressable>
        </View>

        {/* Bottom row: quantity selector + price */}
        <View style={styles.bottomRow}>
          <View style={styles.quantityPill}>
            <Text style={styles.quantityText}>{quantity}</Text>
            <ChevronDown size={14} color={Theme.colors.dark} strokeWidth={1.5} />
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: Theme.spacing.lg,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 18,
    backgroundColor: Theme.colors.grayLight,
  },
  info: {
    flex: 1,
    paddingLeft: Theme.spacing.md,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: Theme.spacing.sm,
  },
  title: {
    ...Theme.typography.t3,
    color: Theme.colors.dark,
    flex: 1,
  },
  removeBtn: {
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Theme.spacing.sm,
  },
  quantityPill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.colors.grayLight,
    borderRadius: 100,
    paddingHorizontal: Theme.spacing.sm,
    paddingVertical: 4,
    gap: Theme.spacing.xs,
  },
  quantityText: {
    ...Theme.typography.bodySm,
    color: Theme.colors.dark,
  },
  price: {
    ...Theme.typography.t4,
    color: Theme.colors.dark,
  },
});
