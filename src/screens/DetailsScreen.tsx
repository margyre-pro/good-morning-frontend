import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/HomeStack";
import { Theme } from "../constants/Theme";

type Props = NativeStackScreenProps<HomeStackParamList, "Details">;

export default function DetailsScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.root} edges={["top"]}>
      <View style={styles.center}>
        <Text style={styles.title}>Détails Produit</Text>
        <Text style={styles.subtitle}>DetailsScreen</Text>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>← Retour</Text>
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
    backgroundColor: Theme.colors.dark,
  },
  btnText: {
    color: Theme.colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
});
