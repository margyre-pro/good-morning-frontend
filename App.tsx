import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './src/components/ui/AppButton';
import { Theme } from './src/constants/Theme';

export default function App() {
  const [loadingPrimary, setLoadingPrimary] = useState(false);

  function handleAddToCart() {
    setLoadingPrimary(true);
    setTimeout(() => setLoadingPrimary(false), 1800);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Components</Text>

      <View style={styles.buttonGroup}>
        <AppButton
          variant="primary"
          title="Ajouter au panier"
          onPress={handleAddToCart}
          isLoading={loadingPrimary}
        />
        <AppButton
          variant="secondary"
          title=" Pay"
          onPress={() => {}}
        />
        <AppButton
          variant="subtle"
          title="Finaliser ma commande"
          onPress={() => {}}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  title: {
    ...Theme.typography.t2,
    color: Theme.colors.dark,
    marginBottom: Theme.spacing.xl,
  },
  buttonGroup: {
    width: '100%',
    gap: Theme.spacing.md,
  },
});
