import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartStackParamList } from "../navigation/CartStack";
import { Theme } from "../constants/Theme";

type Props = NativeStackScreenProps<CartStackParamList, "Confirmation">;

export default function ConfirmationScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.root} edges={["top"]}>
      <View style={styles.center}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>Commande confirmée</Text>
        <Text style={styles.subtitle}>ConfirmationScreen</Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.btnText}>Retour au panier</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Theme.colors.background },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Theme.spacing.md,
  },
  emoji: { fontSize: 48 },
  title: { ...Theme.typography.t1, color: Theme.colors.dark },
  subtitle: { ...Theme.typography.bodyLg, color: Theme.colors.grayMid },
  btn: {
    marginTop: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.sm,
    borderRadius: 100,
    backgroundColor: Theme.colors.dark,
  },
  btnText: { color: Theme.colors.white, fontSize: 14, fontWeight: "600" },
});
