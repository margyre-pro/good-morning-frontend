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
      { id: "1", name: "Vitamine C", price: "39,99 $", imageSource: require("../../assets/images/products/GM1.webp") },
      { id: "2", name: "Molecule Serum", price: "45,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "3", name: "Huile Essentielle", price: "32,00 $", imageSource: require("../../assets/images/products/GM3.webp") },
      { id: "4", name: "Porte-clés & Pins", price: "28,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
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
      { id: "1", name: "Casque Studio", price: "299,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "2", name: "Enceinte Pocket", price: "149,00 $", imageSource: require("../../assets/images/products/GM6.webp") },
      { id: "3", name: "Écouteurs Pro", price: "199,00 $", imageSource: require("../../assets/images/products/MG7.webp") },
      { id: "4", name: "Câble Premium", price: "49,00 $", imageSource: require("../../assets/images/products/GM3.webp") },
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
      { id: "1", name: "Lampe Book", price: "195,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "2", name: "Lampe Desk", price: "245,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
      { id: "3", name: "Veilleuse", price: "120,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "4", name: "Lampe Pocket", price: "85,00 $", imageSource: require("../../assets/images/products/GM6.webp") },
    ],
  },
} as const;

type CollectionId = keyof typeof COLLECTIONS_DATA;
type Props = NativeStackScreenProps<HomeStackParamList, "CollectionDetail">;

const BTN_H = 54;
const TAB_PILL_H = 64;

export default function CollectionDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { collectionId } = route.params;
  const collection = COLLECTIONS_DATA[collectionId as CollectionId];

  if (!collection) return null;

  // Distance entre le bas de l'écran et le haut de la pill de navigation
  const tabBarBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;
  // Le bouton flotte juste au-dessus de la pill, avec 12px d'air
  const btnBottom = tabBarBottom + TAB_PILL_H + 12;
  // Le scroll doit laisser de la place sous le dernier produit
  const scrollPaddingBottom = btnBottom + BTN_H + 24;

  return (
    <View style={styles.root}>
      {/* ── Contenu scrollable ──────────────────────────────────── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scrollPaddingBottom + 100 }}
      >
        {/* Image header */}
        <ImageBackground
          source={collection.headerImage}
          style={styles.headerImage}
          resizeMode="cover"
        >
          {/* Bouton retour — cercle blanc avec ombre */}
          <Pressable
            style={[styles.backBtn, { top: Math.max(insets.top + 12, 52) }]}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={20} color={Theme.colors.dark} strokeWidth={1.5} />
          </Pressable>
        </ImageBackground>

        {/* Carte blanche qui remonte sur l'image */}
        <View style={styles.card}>

          {/* Titre */}
          <Text style={styles.collectionName}>{collection.name}</Text>

          {/* Ligne catégorie + badge */}
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

          {/* Compteur produits dynamique */}
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
                  onPress={() => {}}
                />
              </View>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* ── Bouton fixe au-dessus de la tab bar ─────────────────── */}
      <View style={[styles.footerWrapper, { bottom: btnBottom }]}>
        <Pressable
          style={({ pressed }) => [
            styles.addToCartBtn,
            pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
          ]}
          onPress={() => {}}
        >
          <Text style={styles.addToCartText}>AJOUTER AU PANIER</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.background,
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

  // ── Ligne méta
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

  // ── Bouton fixe
  footerWrapper: {
    position: "absolute",
    left: H_PAD,
    right: H_PAD,
  },
  addToCartBtn: {
    height: BTN_H,
    backgroundColor: Theme.colors.primary,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  addToCartText: {
    color: Theme.colors.white,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
});
