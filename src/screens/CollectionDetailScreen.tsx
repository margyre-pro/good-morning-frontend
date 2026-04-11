import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStackParamList } from "../navigation/HomeStack";
import ProductCard from "../components/ui/ProductCard";
import { Theme } from "../constants/Theme";

const { width: W, height: H } = Dimensions.get("window");
const H_PAD = 20;
const GAP = 12;
const CARD_W = (W - H_PAD * 2 - GAP) / 2;

const COLLECTIONS_DATA = {
  tahnyc: {
    name: "Tahnyc",
    categoryLabel: "ECO SKINCARE",
    badge: "ECO-FRIENDLY",
    description:
      "Une gamme skincare éco-responsable formulée avec des ingrédients naturels sourcés durablement. Chaque produit est conçu pour sublimer votre rituel quotidien.",
    headerImage: require("../../assets/images/products/Tahnyc-brand.webp"),
    products: [
      { id: "vitamine-c",       name: "Vitamine C",        price: "39,99 $", imageSource: require("../../assets/images/products/GM1.webp") },
      { id: "molecule-serum",   name: "Molecule Serum",    price: "45,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "huile-essentielle",name: "Huile Essentielle", price: "32,00 $", imageSource: require("../../assets/images/products/GM3.webp") },
      { id: "porte-cles-pins",  name: "Porte-clés & Pins", price: "28,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
    ],
  },
  "brom-jakobsen": {
    name: "Brom & Jakobsen",
    categoryLabel: "AUDIO STUDIO",
    badge: "EXCLUSIVITÉ",
    description:
      "Audio de précision pour les exigeants. Chaque pièce est fabriquée à la main en Scandinavie, alliant matériaux nobles et ingénierie sonore d'exception.",
    headerImage: require("../../assets/images/products/BromJakobsen-brand.webp"),
    products: [
      { id: "casque-studio",   name: "Casque Studio",   price: "299,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "enceinte-pocket", name: "Enceinte Pocket", price: "149,00 $", imageSource: require("../../assets/images/products/GM6.webp") },
      { id: "ecouteurs-pro",   name: "Écouteurs Pro",   price: "199,00 $", imageSource: require("../../assets/images/products/MG7.webp") },
      { id: "cable-premium",   name: "Câble Premium",   price: "49,00 $",  imageSource: require("../../assets/images/products/GM3.webp") },
    ],
  },
  lumio: {
    name: "Lumio",
    categoryLabel: "ÉCLAIRAGE DESIGN",
    badge: "SÉRIE LIMITÉE",
    description:
      "L'éclairage réinventé. Des lampes iconiques qui se plient, s'accrochent et voyagent avec vous. Design minimaliste et lumière chaude pour chaque espace.",
    headerImage: require("../../assets/images/products/Lumio-brand.webp"),
    products: [
      { id: "lampe-book",   name: "Lampe Book",   price: "195,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "lampe-desk",   name: "Lampe Desk",   price: "245,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
      { id: "veilleuse",    name: "Veilleuse",    price: "120,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "lampe-pocket", name: "Lampe Pocket", price: "85,00 $",  imageSource: require("../../assets/images/products/GM6.webp") },
    ],
  },
};

type CollectionId = keyof typeof COLLECTIONS_DATA;
type Props = NativeStackScreenProps<HomeStackParamList, "CollectionDetail">;

export default function CollectionDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { collectionId } = route.params;
  const collection = COLLECTIONS_DATA[collectionId as CollectionId];

  if (!collection) return null;

  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* ── Image header ────────────────────────────────────────── */}
      <ImageBackground
        source={collection.headerImage}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <Pressable
          style={[styles.backBtn, { top: Math.max(insets.top + 12, 52) }]}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={20} color={Theme.colors.dark} strokeWidth={1.5} />
        </Pressable>
      </ImageBackground>

      {/* ── Carte blanche qui remonte sur l'image ───────────────── */}
      <View style={styles.card}>

        {/* Titre */}
        <Text style={styles.collectionName}>{collection.name}</Text>

        {/* Catégorie + badge */}
        <View style={styles.metaRow}>
          <Text style={styles.categoryLabel}>{collection.categoryLabel}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{collection.badge}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{collection.description}</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Compteur */}
        <Text style={styles.productCount}>
          {collection.products.length} PRODUITS
        </Text>

        {/* Grille 2 colonnes */}
        <View style={styles.grid}>
          {collection.products.map((product) => (
            <View key={product.id} style={{ width: CARD_W }}>
              <ProductCard
                name={product.name}
                price={product.price}
                imageSource={product.imageSource}
                onPress={() => navigation.navigate("ProductDetail", { productId: product.id })}
              />
            </View>
          ))}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  // paddingBottom = espace pour la pill (64) + sa marge basse (~32) + air
  scrollContent: {
    paddingBottom: 140,
  },

  // ── Header image
  headerImage: {
    width: W,
    height: H * 0.42,
  },
  backBtn: {
    position: "absolute",
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  // ── Carte blanche
  card: {
    marginTop: -36,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: H_PAD,
    paddingTop: 32,
  },
  collectionName: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
    marginBottom: Theme.spacing.md,
  },

  // ── Méta
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Theme.spacing.md,
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: Theme.colors.dark,
    letterSpacing: 1.5,
  },
  badge: {
    borderWidth: 1,
    borderColor: Theme.colors.grayLight,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: Theme.colors.dark,
    letterSpacing: 0.8,
  },

  // ── Description + séparateur + compteur
  description: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.grayMid,
    lineHeight: 22,
    marginBottom: Theme.spacing.lg,
  },
  divider: {
    height: 0.5,
    backgroundColor: Theme.colors.grayLight,
    marginBottom: Theme.spacing.md,
  },
  productCount: {
    fontSize: 11,
    fontWeight: "700",
    color: Theme.colors.dark,
    letterSpacing: 1.5,
    marginBottom: Theme.spacing.lg,
  },

  // ── Grille
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
});
