import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronRight } from "lucide-react-native";
import { Theme } from "../constants/Theme";

const MENU_ITEMS = [
  { emoji: "👀", label: "Besoin d'aide ?" },
  { emoji: "📝", label: "Mes informations" },
  { emoji: "☀️", label: "Mes commandes" },
  { emoji: "👋", label: "Besoin d'aide ?" },
];

const H_PAD = 20;
const TAB_PILL_H = 64;

export default function HelpScreen() {
  const insets = useSafeAreaInsets();
  const tabBarBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;
  const scrollPaddingBottom = tabBarBottom + TAB_PILL_H + 24;

  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollContent,
        {
          paddingTop: Math.max(insets.top + 24, 52),
          paddingBottom: scrollPaddingBottom,
        },
      ]}
    >
      {/* ── Titre ──────────────────────────────────────────────── */}
      <Text style={styles.title}>Besoin d'aide ?</Text>
      <View style={styles.titleDivider} />

      {/* ── Liste ──────────────────────────────────────────────── */}
      <View style={styles.menuList}>
        {MENU_ITEMS.map((item, index) => (
          <View key={index}>
            <Pressable
              style={({ pressed }) => [
                styles.menuRow,
                pressed && { backgroundColor: "#F5F5F5" },
              ]}
            >
              <Text style={styles.menuEmoji}>{item.emoji}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight size={18} color={Theme.colors.grayMid} strokeWidth={1.5} />
            </Pressable>
            {index < MENU_ITEMS.length - 1 && <View style={styles.rowDivider} />}
          </View>
        ))}
      </View>
    </ScrollView>
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
    height: 1,
    backgroundColor: Theme.colors.dark,
    marginBottom: 40,
  },

  // ── Menu
  menuList: {
    gap: 0,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    gap: 14,
  },
  menuEmoji: {
    fontSize: 22,
    width: 32,
    textAlign: "center",
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: Theme.colors.dark,
    fontWeight: "400",
  },
  rowDivider: {
    height: 0.5,
    backgroundColor: Theme.colors.grayLight,
  },
});
