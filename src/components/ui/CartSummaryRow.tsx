import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/Theme";

interface CartSummaryRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

export function CartSummaryRow({ label, value, isTotal = false }: CartSummaryRowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isTotal && styles.valueTotal]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Theme.spacing.sm,
  },
  label: {
    ...Theme.typography.t4,
    color: Theme.colors.grayMid,
  },
  value: {
    ...Theme.typography.t4,
    color: Theme.colors.dark,
  },
  valueTotal: {
    ...Theme.typography.t3,
    color: Theme.colors.dark,
  },
});
