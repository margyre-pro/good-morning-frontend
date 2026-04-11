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
const BTN_H = 54;
const TAB_PILL_H = 64;

// ── Catalogue produits
const PRODUCTS_DATA: Record<string, {
  name: string;
  price: string;
  categoryLabel: string;
  tag: string;
  description: string;
  imageSource: any;
  related: Array<{ id: string; name: string; price: string; imageSource: any }>;
}> = {

  // ── Tahnyc — Eco Skincare
  "vitamine-c": {
    name: "Vitamine C",
    price: "39,99 $",
    categoryLabel: "ECO SKINCARE",
    tag: "ECO-FRIENDLY",
    description:
      "Une formule concentrée en vitamine C pure pour un éclat immédiat. Atténue les taches, unifie le teint et stimule la production de collagène pour une peau lumineuse au quotidien.",
    imageSource: require("../../assets/images/products/GM1.webp"),
    related: [
      { id: "molecule-serum",   name: "Molecule Serum",    price: "45,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "huile-essentielle",name: "Huile Essentielle", price: "32,00 $", imageSource: require("../../assets/images/products/GM3.webp") },
    ],
  },
  "molecule-serum": {
    name: "Molecule Serum",
    price: "45,00 $",
    categoryLabel: "ECO SKINCARE",
    tag: "ECO-FRIENDLY",
    description:
      "Sérum de haute précision aux molécules actives encapsulées. Pénètre en profondeur pour repulper, lisser et redonner densité à la peau dès les premières applications.",
    imageSource: require("../../assets/images/products/GM2.webp"),
    related: [
      { id: "vitamine-c",       name: "Vitamine C",        price: "39,99 $", imageSource: require("../../assets/images/products/GM1.webp") },
      { id: "huile-essentielle",name: "Huile Essentielle", price: "32,00 $", imageSource: require("../../assets/images/products/GM3.webp") },
    ],
  },
  "huile-essentielle": {
    name: "Huile Essentielle",
    price: "32,00 $",
    categoryLabel: "ECO SKINCARE",
    tag: "NATUREL",
    description:
      "Huile précieuse issue de fleurs sauvages cueillies à la main. Nourrit en profondeur, restaure l'éclat et laisse la peau soyeuse. S'utilise pure ou diluée selon votre rituel.",
    imageSource: require("../../assets/images/products/GM3.webp"),
    related: [
      { id: "vitamine-c",     name: "Vitamine C",     price: "39,99 $", imageSource: require("../../assets/images/products/GM1.webp") },
      { id: "molecule-serum", name: "Molecule Serum", price: "45,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
    ],
  },
  "porte-cles-pins": {
    name: "Porte-clés & Pins",
    price: "28,00 $",
    categoryLabel: "ECO SKINCARE",
    tag: "SÉRIE LIMITÉE",
    description:
      "Accessoires collector imaginés par nos artistes résidents. Édition limitée, fabriqués à la main, chaque pièce est unique. À collectionner ou à offrir.",
    imageSource: require("../../assets/images/products/GM5.webp"),
    related: [
      { id: "vitamine-c",     name: "Vitamine C",     price: "39,99 $", imageSource: require("../../assets/images/products/GM1.webp") },
      { id: "molecule-serum", name: "Molecule Serum", price: "45,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
    ],
  },

  // ── Brom & Jakobsen — Audio Studio
  "casque-studio": {
    name: "Casque Studio",
    price: "299,00 $",
    categoryLabel: "AUDIO STUDIO",
    tag: "EXCLUSIVITÉ",
    description:
      "Casque circum-aural fabriqué à la main en Scandinavie. Arceau en aluminium brossé, coussinets en cuir pleine fleur, drivers 40 mm à réponse en fréquence étendue. Pour une écoute sans compromis.",
    imageSource: require("../../assets/images/products/GM8.webp"),
    related: [
      { id: "enceinte-pocket", name: "Enceinte Pocket", price: "149,00 $", imageSource: require("../../assets/images/products/GM6.webp") },
      { id: "ecouteurs-pro",   name: "Écouteurs Pro",   price: "199,00 $", imageSource: require("../../assets/images/products/MG7.webp") },
    ],
  },
  "enceinte-pocket": {
    name: "Enceinte Pocket",
    price: "149,00 $",
    categoryLabel: "AUDIO STUDIO",
    tag: "EXCLUSIVITÉ",
    description:
      "Enceinte portable de poche taillée dans un bloc d'aluminium anodisé. Son 360°, 12h d'autonomie, résistante à l'eau IPX5. La puissance Brom & Jakobsen dans la paume de la main.",
    imageSource: require("../../assets/images/products/GM6.webp"),
    related: [
      { id: "casque-studio",  name: "Casque Studio",  price: "299,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "ecouteurs-pro",  name: "Écouteurs Pro",  price: "199,00 $", imageSource: require("../../assets/images/products/MG7.webp") },
    ],
  },
  "ecouteurs-pro": {
    name: "Écouteurs Pro",
    price: "199,00 $",
    categoryLabel: "AUDIO STUDIO",
    tag: "EXCLUSIVITÉ",
    description:
      "Intra-auriculaires à réduction de bruit active, câble tressé argent inclus. Trois tailles d'embouts en silicone médical pour un maintien parfait. L'ingénierie sonore nordique dans vos oreilles.",
    imageSource: require("../../assets/images/products/MG7.webp"),
    related: [
      { id: "casque-studio",   name: "Casque Studio",   price: "299,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "enceinte-pocket", name: "Enceinte Pocket", price: "149,00 $", imageSource: require("../../assets/images/products/GM6.webp") },
    ],
  },
  "cable-premium": {
    name: "Câble Premium",
    price: "49,00 $",
    categoryLabel: "AUDIO STUDIO",
    tag: "EXCLUSIVITÉ",
    description:
      "Câble de connexion tressé en Kevlar, terminaisons en laiton doré 24 carats. Compatible avec toute la gamme Brom & Jakobsen. Un détail qui change tout pour l'audiophile exigeant.",
    imageSource: require("../../assets/images/products/GM3.webp"),
    related: [
      { id: "casque-studio",  name: "Casque Studio",  price: "299,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
      { id: "ecouteurs-pro",  name: "Écouteurs Pro",  price: "199,00 $", imageSource: require("../../assets/images/products/MG7.webp") },
    ],
  },

  // ── Lumio — Éclairage Design
  "lampe-book": {
    name: "Lampe Book",
    price: "195,00 $",
    categoryLabel: "ÉCLAIRAGE DESIGN",
    tag: "SÉRIE LIMITÉE",
    description:
      "La lampe qui se plie comme un livre. Plaquage bois naturel sur l'extérieur, LED chaud à l'intérieur. S'ouvre à 360° pour moduler l'intensité lumineuse. Posée ou suspendue, elle transforme chaque espace.",
    imageSource: require("../../assets/images/products/GM2.webp"),
    related: [
      { id: "lampe-desk",   name: "Lampe Desk",   price: "245,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
      { id: "veilleuse",    name: "Veilleuse",    price: "120,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
    ],
  },
  "lampe-desk": {
    name: "Lampe Desk",
    price: "245,00 $",
    categoryLabel: "ÉCLAIRAGE DESIGN",
    tag: "SÉRIE LIMITÉE",
    description:
      "Lampe de bureau articulée en laiton brossé. Bras magnétique ajustable à l'infini, intensité variable par simple effleurement. Conçue pour les longues sessions de travail créatif.",
    imageSource: require("../../assets/images/products/GM5.webp"),
    related: [
      { id: "lampe-book",   name: "Lampe Book",   price: "195,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "veilleuse",    name: "Veilleuse",    price: "120,00 $", imageSource: require("../../assets/images/products/GM8.webp") },
    ],
  },
  "veilleuse": {
    name: "Veilleuse",
    price: "120,00 $",
    categoryLabel: "ÉCLAIRAGE DESIGN",
    tag: "SÉRIE LIMITÉE",
    description:
      "Veilleuse nomade en porcelaine soufflée à la bouche. Lumière ambrée ultraDouce, autonomie 8h, recharge par induction. Un objet d'artisanat qui diffuse une atmosphère apaisante.",
    imageSource: require("../../assets/images/products/GM8.webp"),
    related: [
      { id: "lampe-book",   name: "Lampe Book",   price: "195,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "lampe-desk",   name: "Lampe Desk",   price: "245,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
    ],
  },
  "lampe-pocket": {
    name: "Lampe Pocket",
    price: "85,00 $",
    categoryLabel: "ÉCLAIRAGE DESIGN",
    tag: "SÉRIE LIMITÉE",
    description:
      "Lampe de poche rechargeable en aluminium anodisé. Se fixe partout grâce à son clip magnétique intégré. Trois températures de blanc, format ultra-compact. La lumière Lumio toujours avec vous.",
    imageSource: require("../../assets/images/products/GM6.webp"),
    related: [
      { id: "lampe-book",   name: "Lampe Book",   price: "195,00 $", imageSource: require("../../assets/images/products/GM2.webp") },
      { id: "lampe-desk",   name: "Lampe Desk",   price: "245,00 $", imageSource: require("../../assets/images/products/GM5.webp") },
    ],
  },
};

const DEFAULT_PRODUCT = PRODUCTS_DATA["vitamine-c"];

type Props = NativeStackScreenProps<HomeStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const product = PRODUCTS_DATA[route.params?.productId] ?? DEFAULT_PRODUCT;

  const tabBarBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;
  const btnBottom = tabBarBottom + TAB_PILL_H + 12;
  const scrollPaddingBottom = btnBottom + BTN_H + 100;

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scrollPaddingBottom }}
      >
        {/* ── Image header ──────────────────────────────────────── */}
        <ImageBackground
          source={product.imageSource}
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

        {/* ── Carte blanche qui remonte ─────────────────────────── */}
        <View style={styles.card}>

          {/* Prix */}
          <Text style={styles.price}>{product.price}</Text>

          {/* Catégorie + badge */}
          <View style={styles.metaRow}>
            <Text style={styles.categoryLabel}>{product.categoryLabel}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{product.tag}</Text>
            </View>
          </View>

          {/* Nom du produit */}
          <Text style={styles.productName}>{product.name}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Section recommandations */}
          <Text style={styles.sectionTitle}>DÉCOUVREZ ÉGALEMENT</Text>

          <View style={styles.relatedGrid}>
            {product.related.map((item) => (
              <View key={item.id} style={{ width: CARD_W }}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  imageSource={item.imageSource}
                  onPress={() => navigation.replace("ProductDetail", { productId: item.id })}
                />
              </View>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* ── Bouton fixe au-dessus de la tab bar ──────────────────── */}
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
    height: H * 0.45,
  },
  backBtn: {
    position: "absolute",
    left: H_PAD,
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
    paddingTop: 28,
  },

  // ── Prix
  price: {
    ...Theme.typography.t3,
    color: Theme.colors.dark,
    fontWeight: "700",
    marginBottom: Theme.spacing.sm,
  },

  // ── Méta : catégorie + badge outlined
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

  // ── Nom + description
  productName: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
    marginBottom: Theme.spacing.md,
  },
  description: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.grayMid,
    lineHeight: 22,
    marginBottom: Theme.spacing.lg,
  },

  // ── Divider + section
  divider: {
    height: 0.5,
    backgroundColor: Theme.colors.grayLight,
    marginBottom: Theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: Theme.colors.dark,
    letterSpacing: 1.5,
    marginBottom: Theme.spacing.lg,
  },

  // ── Grille recommandations
  relatedGrid: {
    flexDirection: "row",
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
