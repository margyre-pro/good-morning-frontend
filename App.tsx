import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from './src/components/ui/AppButton';
import CollectionCard, { Collection } from './src/components/ui/CollectionCard';
import ProductGridScreen from './src/screens/ProductGridScreen';
import { Theme } from './src/constants/Theme';

const MOCK_COLLECTIONS: Collection[] = [
  {
    id: '1',
    name: 'Tahnyc',
    category: 'Skin Care',
    tag: 'Eco-friendly',
    imageSource: require('./assets/images/products/Tahnyc-brand.webp'),
  },
  {
    id: '2',
    name: 'Lumio',
    category: 'Éclairage',
    tag: 'Exclusivité',
    imageSource: require('./assets/images/products/Lumio-brand.webp'),
  },
  {
    id: '3',
    name: 'Brom & Jakobsen',
    category: 'Audio',
    tag: 'Série Limitée',
    imageSource: require('./assets/images/products/Brom-Jakobsen-brand.webp'),
  },
];

export default function App() {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      {/* ── 1. COLLECTIONS ──────────────────────────────────────────── */}
      <Text style={styles.sectionTitle}>Collections</Text>
      <View style={styles.collectionList}>
        {MOCK_COLLECTIONS.map((c) => (
          <CollectionCard key={c.id} collection={c} onPress={() => {}} />
        ))}
      </View>

      {/* ── 2. PRODUITS ─────────────────────────────────────────────── */}
      <Text style={styles.sectionTitle}>Produits</Text>
      <ProductGridScreen />

      {/* ── 3. ACTIONS ──────────────────────────────────────────────── */}
      <View style={styles.buttonGroup}>
        <AppButton variant="primary"   title="Ajouter au panier" onPress={() => {}} />
        <AppButton variant="secondary" title="Voir tout"          onPress={() => {}} />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scroll: {
    paddingTop: 60,
    paddingBottom: Theme.spacing.xl,
    gap: Theme.spacing.lg,
  },
  sectionTitle: {
    ...Theme.typography.t2,
    color: Theme.colors.dark,
    paddingHorizontal: Theme.spacing.lg,
  },
  collectionList: {
    gap: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.lg,
  },
  buttonGroup: {
    gap: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
  },
});
