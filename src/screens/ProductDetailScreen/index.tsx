import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeStackParamList } from "../../navigation/HomeStack";
import ProductCard from "../../components/ui/ProductCard";
import { Theme } from "../../constants/Theme";
import { useCart } from "../../hooks/useCart";

// Imports des fichiers séparés
import { PRODUCTS_DATA } from "./data";
import { styles } from "./styles";

const { width: W } = Dimensions.get("window");
const H_PAD = 20;
const GAP = 12;
const CARD_W = (W - H_PAD * 2 - GAP) / 2;
const BTN_H = 54;
const TAB_PILL_H = 64;

type Props = NativeStackScreenProps<HomeStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route, navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { addToCart } = useCart();

  // On récupère le produit via l'ID passé en paramètre
  const productId = route.params?.productId;
  const product = PRODUCTS_DATA[productId] ?? PRODUCTS_DATA["vitamine-c"];

  // Calculs de marges pour éviter la collision avec la TabBar
  const tabBarBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;
  const btnBottom = tabBarBottom + TAB_PILL_H + 12;
  const scrollPaddingBottom = btnBottom + BTN_H + 50;

  const handleAddToCart = () => {
    // Nettoyage du prix pour le calcul (ex: "39,99 $" -> 39.99)
    const numericPrice = parseFloat(
      product.price.replace("$", "").replace(",", ".").trim(),
    );

    addToCart({
      id: productId || "vitamine-c",
      name: product.name,
      price: numericPrice,
      image: product.imageSource,
    });

    // Optionnel : navigation.navigate('Cart') si tu veux rediriger l'utilisateur
    console.log("Ajouté au panier !");
  };

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scrollPaddingBottom }}
      >
        {/* Header Image avec bouton retour */}
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

        {/* Contenu du produit */}
        <View style={styles.card}>
          <Text style={styles.price}>{product.price}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.categoryLabel}>{product.categoryLabel}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{product.tag}</Text>
            </View>
          </View>

          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>DÉCOUVREZ ÉGALEMENT</Text>

          {/* Recommandations */}
          <View style={styles.relatedGrid}>
            {product.related.map((item) => (
              <View key={item.id} style={{ width: CARD_W }}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  imageSource={item.imageSource}
                  onPress={() =>
                    navigation.push("ProductDetail", { productId: item.id })
                  }
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bouton Ajouter au panier flottant */}
      <View style={[styles.footerWrapper, { bottom: btnBottom }]}>
        <Pressable
          style={({ pressed }) => [
            styles.addToCartBtn,
            pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
          ]}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>AJOUTER AU PANIER</Text>
        </Pressable>
      </View>
    </View>
  );
}
