import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { X } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartStackParamList } from "../navigation/CartStack";
import { useCart } from "../hooks/useCart";
import { Theme } from "../constants/Theme";

type Props = NativeStackScreenProps<CartStackParamList, "Cart">;

const { width: W } = Dimensions.get("window");
const H_PAD = 20;
const TAB_PILL_H = 64;
const FOOTER_H = 54 + 12 + 54; // 2 boutons + gap

export default function CartScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const tabBarBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;
  const footerBottom = tabBarBottom + TAB_PILL_H + 12;
  const scrollPaddingBottom = footerBottom + FOOTER_H + 24;

  const isEmpty = cart.length === 0;

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: Math.max(insets.top + 24, 52), paddingBottom: scrollPaddingBottom },
        ]}
      >
        {/* ── Titre ──────────────────────────────────────────────── */}
        <Text style={styles.title}>Mon Panier</Text>
        <View style={styles.titleDivider} />

        {/* ── Liste des articles ─────────────────────────────────── */}
        {isEmpty ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>Votre panier est vide</Text>
          </View>
        ) : (
          cart.map((item) => (
            <View key={item.id}>
              <View style={styles.cartItem}>
                {/* Image */}
                <Image source={item.image} style={styles.itemImage} />

                {/* Infos */}
                <View style={styles.itemInfo}>
                  <View style={styles.itemTopRow}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Pressable
                      onPress={() => removeFromCart(item.id)}
                      hitSlop={8}
                    >
                      <X size={16} color={Theme.colors.grayMid} strokeWidth={1.5} />
                    </Pressable>
                  </View>

                  <View style={styles.itemBottomRow}>
                    {/* Quantité */}
                    <View style={styles.qtyRow}>
                      <Pressable
                        style={styles.qtyBtn}
                        onPress={() => updateQuantity(item.id, -1)}
                      >
                        <Text style={styles.qtyBtnText}>−</Text>
                      </Pressable>
                      <Text style={styles.qtyValue}>
                        {String(item.quantity).padStart(2, "0")}
                      </Text>
                      <Pressable
                        style={styles.qtyBtn}
                        onPress={() => updateQuantity(item.id, 1)}
                      >
                        <Text style={styles.qtyBtnText}>+</Text>
                      </Pressable>
                    </View>

                    {/* Prix ligne */}
                    <Text style={styles.itemPrice}>
                      {(item.price * item.quantity).toFixed(2).replace(".", ",")}$
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemDivider} />
            </View>
          ))
        )}

        {/* ── Récapitulatif ──────────────────────────────────────── */}
        {!isEmpty && (
          <View style={styles.summary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>LIVRAISON</Text>
              <Text style={styles.summaryFree}>OFFERTE</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                {totalPrice.toFixed(2).replace(".", ",")}$
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* ── Boutons fixes ──────────────────────────────────────────── */}
      <View style={[styles.footer, { bottom: footerBottom }]}>
        <Pressable
          style={({ pressed }) => [
            styles.btnFinaliser,
            pressed && { opacity: 0.82 },
          ]}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.btnFinaliserText}>Finaliser ma commande</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.btnApplePay,
            pressed && { opacity: 0.82 },
          ]}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.btnApplePayText}> Pay</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  scrollContent: {
    paddingHorizontal: H_PAD,
  },

  // ── Titre
  title: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
    marginBottom: 16,
  },
  titleDivider: {
    height: 0.5,
    backgroundColor: Theme.colors.grayLight,
    marginBottom: 24,
  },

  // ── État vide
  emptyState: {
    alignItems: "center",
    paddingTop: 60,
  },
  emptyText: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.grayMid,
  },

  // ── Article
  cartItem: {
    flexDirection: "row",
    gap: 16,
    paddingVertical: 16,
  },
  itemImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: Theme.colors.grayLight,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemName: {
    ...Theme.typography.t4,
    color: Theme.colors.dark,
    flex: 1,
    marginRight: 8,
  },
  itemBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  // ── Quantité
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.colors.grayLight,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 8,
  },
  qtyBtn: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    fontSize: 16,
    color: Theme.colors.dark,
    lineHeight: 18,
  },
  qtyValue: {
    fontSize: 13,
    fontWeight: "600",
    color: Theme.colors.dark,
    minWidth: 20,
    textAlign: "center",
  },

  // ── Prix ligne
  itemPrice: {
    ...Theme.typography.t4,
    color: Theme.colors.dark,
    fontWeight: "700",
  },
  itemDivider: {
    height: 0.5,
    backgroundColor: Theme.colors.grayLight,
  },

  // ── Récapitulatif
  summary: {
    marginTop: 24,
    gap: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: Theme.colors.grayMid,
    letterSpacing: 1.5,
  },
  summaryFree: {
    fontSize: 10,
    fontWeight: "700",
    color: Theme.colors.grayMid,
    letterSpacing: 1.5,
  },
  totalLabel: {
    ...Theme.typography.t3,
    color: Theme.colors.dark,
  },
  totalValue: {
    ...Theme.typography.t3,
    color: Theme.colors.dark,
    fontWeight: "700",
  },

  // ── Footer boutons
  footer: {
    position: "absolute",
    left: H_PAD,
    right: H_PAD,
    gap: 12,
  },
  btnFinaliser: {
    height: 54,
    backgroundColor: "#9E9E9E",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnFinaliserText: {
    fontSize: 15,
    fontWeight: "600",
    color: Theme.colors.white,
    letterSpacing: 0.3,
  },
  btnApplePay: {
    height: 54,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnApplePayText: {
    fontSize: 17,
    fontWeight: "600",
    color: Theme.colors.white,
    letterSpacing: 0.2,
  },
});
