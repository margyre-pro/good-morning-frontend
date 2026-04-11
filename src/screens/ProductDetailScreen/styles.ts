// src/screens/ProductDetailScreen/styles.ts
import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../constants/Theme";

const { width: W, height: H } = Dimensions.get("window");
const H_PAD = 20;
const GAP = 12;
const BTN_H = 54;

export const styles = StyleSheet.create({
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
