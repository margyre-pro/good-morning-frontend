import { Dimensions, StyleSheet, View } from "react-native";
import ProductCard from "../components/ui/ProductCard";
import { Theme } from "../constants/Theme";

const { width: W } = Dimensions.get("window");
const H_PAD = Theme.spacing.md;
const GAP = Theme.spacing.md;
const CARD_W = (W - H_PAD * 2 - GAP) / 2;

const MOCK_PRODUCTS = [
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

export default function ProductGridScreen() {
  return (
    <View style={styles.grid}>
      {MOCK_PRODUCTS.map((product) => (
        <View key={product.id} style={{ width: CARD_W }}>
          <ProductCard
            name={product.name}
            price={product.price}
            imageSource={product.imageSource}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
    paddingHorizontal: H_PAD,
  },
});
