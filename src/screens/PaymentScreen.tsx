import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronRight, ScanFace } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartStackParamList } from "../navigation/CartStack";
import { useCart } from "../hooks/useCart";
import { Theme } from "../constants/Theme";

const SHIPPING = 19.9;

type Props = NativeStackScreenProps<CartStackParamList, "Payment">;

function fmt(n: number) {
  return "$ " + n.toFixed(2).replace(".", ",");
}

export default function PaymentScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { totalPrice } = useCart();
  const [loading, setLoading] = useState(false);

  const grandTotal = totalPrice + SHIPPING;

  function handleFaceID() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Confirmation");
    }, 1500);
  }

  return (
    <View style={[styles.root, { paddingTop: Math.max(insets.top, 20) }]}>

      {/* ── Header Apple Pay ──────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <View style={styles.appleDot} />
          <Text style={styles.payLabel}>Pay</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
          <Text style={styles.cancelLabel}>Cancel</Text>
        </Pressable>
      </View>

      <View style={styles.sep} />

      {/* ── Carte bancaire ────────────────────────────────────── */}
      <Pressable style={styles.row}>
        <View style={styles.rowLeft}>
          <View style={styles.mcWrap}>
            <View style={[styles.mcCircle, { backgroundColor: "#EB001B", left: 0 }]} />
            <View style={[styles.mcCircle, { backgroundColor: "#F79E1B", left: 14 }]} />
          </View>
          <View>
            <Text style={styles.rowTitle}>MASTERCARD PLATINUM</Text>
            <Text style={styles.rowSub}>(•••• 2505)</Text>
          </View>
        </View>
        <ChevronRight size={18} color="#C7C7CC" strokeWidth={1.5} />
      </Pressable>

      <View style={styles.sep} />

      {/* ── Adresse ───────────────────────────────────────────── */}
      <Pressable style={styles.row}>
        <View style={styles.rowLeft}>
          <Text style={styles.rowLabel}>ADDRESS</Text>
          <Text style={styles.rowAddress}>
            {"AVENIDA CAXANGÁ\nRECIFE\nPE 44886-232\nBRASIL"}
          </Text>
        </View>
        <ChevronRight size={18} color="#C7C7CC" strokeWidth={1.5} />
      </Pressable>

      <View style={styles.sep} />

      {/* ── Contact ───────────────────────────────────────────── */}
      <Pressable style={styles.row}>
        <View style={styles.rowLeft}>
          <Text style={styles.rowLabel}>CONTACT</Text>
          <Text style={styles.rowAddress}>{"GUIFRANCA@ICLOUD.COM\n(81) 92503-1996"}</Text>
        </View>
        <ChevronRight size={18} color="#C7C7CC" strokeWidth={1.5} />
      </Pressable>

      {/* ── Fond gris séparateur de section ───────────────────── */}
      <View style={styles.sectionGap} />

      {/* ── Résumé financier ──────────────────────────────────── */}
      <View style={styles.summaryBlock}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>SUBTOTAL</Text>
          <Text style={styles.summaryValue}>{fmt(totalPrice)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>SHIPPING</Text>
          <Text style={styles.summaryValue}>{fmt(SHIPPING)}</Text>
        </View>
      </View>

      <View style={styles.sep} />

      <View style={[styles.summaryBlock, styles.totalRow]}>
        <Text style={styles.totalLabel}>PAY GOOD MORNING</Text>
        <Text style={styles.totalValue}>{fmt(grandTotal)}</Text>
      </View>

      <View style={styles.sep} />

      {/* ── Face ID ───────────────────────────────────────────── */}
      <View style={[styles.faceSection, { paddingBottom: Math.max(insets.bottom + 16, 32) }]}>
        <Pressable
          style={styles.faceBtn}
          onPress={handleFaceID}
          disabled={loading}
        >
          {loading
            ? <ActivityIndicator color={Theme.colors.dark} />
            : <ScanFace size={36} color={Theme.colors.dark} strokeWidth={1.2} />
          }
        </Pressable>
        <Text style={styles.faceLabel}>Hold Near Reader</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  appleDot: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: Theme.colors.dark,
  },
  payLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: Theme.colors.dark,
  },
  cancelLabel: {
    fontSize: 16,
    color: "#007AFF",
  },

  // ── Séparateur
  sep: {
    height: 0.5,
    backgroundColor: "#C8C8C8",
  },

  // ── Lignes
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },
  rowLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8E8E93",
    letterSpacing: 0.8,
    width: 64,
  },
  rowTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: Theme.colors.dark,
  },
  rowSub: {
    fontSize: 13,
    color: "#636366",
    marginTop: 2,
  },
  rowAddress: {
    fontSize: 13,
    color: Theme.colors.dark,
    lineHeight: 18,
  },

  // ── Mastercard logo
  mcWrap: {
    width: 38,
    height: 24,
    position: "relative",
  },
  mcCircle: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 12,
    opacity: 0.9,
  },

  // ── Séparateur de section (gris)
  sectionGap: {
    height: 8,
    backgroundColor: "#F2F2F7",
  },

  // ── Résumé
  summaryBlock: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 6,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#8E8E93",
    letterSpacing: 0.6,
  },
  summaryValue: {
    fontSize: 13,
    color: Theme.colors.dark,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    gap: 0,
  },
  totalLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: Theme.colors.dark,
    letterSpacing: 0.6,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: Theme.colors.dark,
  },

  // ── Face ID
  faceSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  faceBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1.5,
    borderColor: Theme.colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  faceLabel: {
    fontSize: 13,
    color: "#636366",
  },
});
