import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../constants/Theme";

const { width, height } = Dimensions.get("window");

// --- MATHÉMATIQUES DU DESIGN ---
const GUTTER = 15;
// On garde une largeur fixe par colonne pour la cohérence
const COLUMN_WIDTH = 162.6;

const LoadingScreen = () => {
  const navigation = useNavigation<any>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* --- LE BLOC QUI TOURNE (MÉTHODE FIGMA) --- */}
        <View style={styles.rotatedGridContainer}>
          <View style={styles.masonryRow}>
            {/* COLONNE 1 */}
            <View style={styles.column}>
              <Image
                source={require("../../assets/images/products/GM1.webp")}
                style={[styles.imageItem, { height: 226 }]}
              />
              <Image
                source={require("../../assets/images/products/GM5.webp")}
                style={[styles.imageItem, { height: 180 }]}
              />
              <Image
                source={require("../../assets/images/products/MG7.webp")}
                style={[styles.imageItem, { height: 210 }]}
              />
            </View>

            {/* COLONNE 2 (Quinconce : décalée vers le bas) */}
            <View style={[styles.column, { marginTop: 60 }]}>
              <Image
                source={require("../../assets/images/products/GM2.webp")}
                style={[styles.imageItem, { height: 250 }]}
              />
              <Image
                source={require("../../assets/images/products/GM6.webp")}
                style={[styles.imageItem, { height: 200 }]}
              />
              <Image
                source={require("../../assets/images/products/GM8.webp")}
                style={[styles.imageItem, { height: 160 }]}
              />
            </View>

            {/* COLONNE 3 */}
            <View style={styles.column}>
              <Image
                source={require("../../assets/images/products/GM3.webp")}
                style={[styles.imageItem, { height: 190 }]}
              />
              <Image
                source={require("../../assets/images/products/MG7.webp")}
                style={[styles.imageItem, { height: 240 }]}
              />
              <Image
                source={require("../../assets/images/products/GM1.webp")}
                style={[styles.imageItem, { height: 180 }]}
              />
            </View>
          </View>
        </View>

        {/* --- BRANDING (DROIT ET FIXE) --- */}
        <View style={styles.brandingSection}>
          <Text style={styles.sunEmoji}>☀️</Text>
          <Text style={[Theme.typography.t1, styles.title]}>
            Good Morning !
          </Text>
          <Text style={[Theme.typography.bodyLg, styles.subtitle]}>
            Qu’est ce qui vous inspire aujourd’hui ?
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    overflow: "hidden", // Crucial pour couper les images qui dépassent après rotation
  },
  content: {
    flex: 1,
  },
  rotatedGridContainer: {
    position: "absolute",
    // On centre la grille géante et on l'incline
    top: -height * 0.15,
    left: -width * 0.45,
    width: width * 2,
    transform: [{ rotate: "-30deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  masonryRow: {
    flexDirection: "row",
    gap: GUTTER,
  },
  column: {
    flexDirection: "column",
    width: COLUMN_WIDTH,
    gap: GUTTER,
  },
  imageItem: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#F7F7F7",
  },
  brandingSection: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.4,
    backgroundColor: "#FFFFFF", // Masque les images inclinées derrière le texte
    paddingHorizontal: 25,
    paddingBottom: 60,
    justifyContent: "flex-end",
  },
  sunEmoji: {
    fontSize: 34,
    marginBottom: 15,
  },
  title: {
    color: "#000000",
    marginBottom: 8,
  },
  subtitle: {
    color: "#666666",
    fontWeight: "300",
  },
});

export default LoadingScreen;
