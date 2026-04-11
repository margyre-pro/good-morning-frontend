import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartStackParamList } from "../navigation/CartStack";
import { Theme } from "../constants/Theme";

type Props = NativeStackScreenProps<CartStackParamList, "Payment">;

export default function PaymentScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.root} edges={["top"]}>
      <View style={styles.center}>
        <Text style={styles.title}>Paiement</Text>
        <Text style={styles.subtitle}>PaymentScreen</Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Confirmation")}
        >
          <Text style={styles.btnText}>Confirmer le paiement →</Text>
        </Pressable>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Retour au panier</Text>
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
  title: { ...Theme.typography.t1, color: Theme.colors.dark },
  subtitle: { ...Theme.typography.bodyLg, color: Theme.colors.grayMid },
  btn: {
    marginTop: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.sm,
    borderRadius: 100,
    backgroundColor: Theme.colors.primary,
  },
  btnText: { color: Theme.colors.white, fontSize: 14, fontWeight: "600" },
  back: { paddingVertical: Theme.spacing.sm },
  backText: { color: Theme.colors.grayMid, fontSize: 14 },
});
