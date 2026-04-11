import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Clock, Search } from "lucide-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/HomeStack";
import CollectionCard from "../components/ui/CollectionCard";
import { Theme } from "../constants/Theme";

type Tab = "moment" | "prochainement";
type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

const ACTIVE = "#EB5757";

export default function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("moment");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ──────────────────────────────────────────────── */}
        <View style={styles.header}>
          <Text style={styles.sunIcon}>☀️</Text>
          <Text style={styles.title}>Good Morning !</Text>
          <Text style={styles.subtitle}>
            Qu'est ce qui vous inspire aujourd'hui ?
          </Text>
        </View>

        {/* ── Tabs ────────────────────────────────────────────────── */}
        <View style={styles.tabsRow}>
          <View style={styles.tabItems}>
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab("moment")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "moment" && { color: "#000000", fontWeight: "600" },
                ]}
              >
                EN CE MOMENT
              </Text>
              {activeTab === "moment" && <View style={styles.activeIndicator} />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab("prochainement")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "prochainement" && { color: ACTIVE, fontWeight: "600" },
                ]}
              >
                PROCHAINEMENT
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Search size={22} color={Theme.colors.dark} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>

        {/* ── Contenu conditionnel ─────────────────────────────────── */}
        {activeTab === "moment" ? (
          <View style={styles.feed}>
            <CollectionCard
              name="Tahnyc"
              category="Skincare"
              tag="Eco-friendly"
              imageSource={require("../../assets/images/products/GM1.webp")}
              onPress={() =>
                navigation.navigate("CollectionDetail", { collectionId: "tahnyc" })
              }
            />
            <CollectionCard
              name="Brom & Jakobsen"
              category="Audio"
              tag="Exclusivité"
              imageSource={require("../../assets/images/products/BromJakobsen-brand.webp")}
              onPress={() =>
                navigation.navigate("CollectionDetail", {
                  collectionId: "brom-jakobsen",
                })
              }
            />
            <CollectionCard
              name="Lumio"
              category="Light"
              tag="Série Limitée"
              imageSource={require("../../assets/images/products/Lumio-brand.webp")}
              onPress={() =>
                navigation.navigate("CollectionDetail", { collectionId: "lumio" })
              }
            />
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Clock size={36} color={Theme.colors.grayLight} strokeWidth={1.2} />
            <Text style={styles.emptyTitle}>Bientôt disponible</Text>
            <Text style={styles.emptySubtitle}>
              De nouvelles pépites arrivent bientôt...
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 120,
  },

  // ── Header
  header: {
    paddingTop: 40,
    paddingHorizontal: 25,
    marginBottom: 35,
  },
  sunIcon: {
    fontSize: 32,
    marginBottom: 15,
  },
  title: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
    marginBottom: 8,
  },
  subtitle: {
    ...Theme.typography.bodyLg,
    color: "#000000",
    fontWeight: "300",
  },

  // ── Tabs
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 25,
  },
  tabItems: {
    flexDirection: "row",
    gap: 20,
  },
  tab: {
    position: "relative",
    paddingVertical: 5,
  },
  tabText: {
    ...Theme.typography.bodySm,
    color: Theme.colors.grayMid,
    letterSpacing: 0.8,
  },
  activeIndicator: {
    position: "absolute",
    bottom: -4,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: ACTIVE,
    borderRadius: 2,
  },

  // ── Feed
  feed: {
    paddingHorizontal: 20,
  },

  // ── État vide
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    gap: Theme.spacing.md,
  },
  emptyTitle: {
    ...Theme.typography.t3,
    color: Theme.colors.grayMid,
    fontWeight: "500",
  },
  emptySubtitle: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.grayLight,
    textAlign: "center",
    paddingHorizontal: Theme.spacing.xl,
  },
});
