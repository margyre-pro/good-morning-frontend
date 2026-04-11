import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sun } from "lucide-react-native";
import { useCart } from "../hooks/useCart";

export default function ConfirmationScreen() {
  const insets = useSafeAreaInsets();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <LinearGradient
      colors={["#C84040", "#EB6060", "#F5A585"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.root}
    >
      <View
        style={[
          styles.content,
          { paddingTop: Math.max(insets.top + 60, 100) },
        ]}
      >
        <Sun size={80} color="#FFD580" strokeWidth={1.2} />

        <Text style={styles.title}>{"Merci pour votre\ncommande !"}</Text>

        <Text style={styles.body}>
          Ante leo velit morbi cras. Velit dictumst iaculis sem egestas nam at
          pellentesque lectus morbi. Malesuada adipiscing sit venenatis quis
          faucibus ut a nisl auctor. Suspendisse urna consectetur fringilla
          imperdiet quam quis ac.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    gap: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 36,
  },
  body: {
    fontSize: 15,
    color: "rgba(255,255,255,0.82)",
    textAlign: "center",
    lineHeight: 22,
  },
});
