import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from './src/components/ui/AppButton';
import CollectionCard, { Collection } from './src/components/ui/CollectionCard';
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
    <ScrollView contentContainerStyle={styles.scroll}>

      <Text style={styles.sectionTitle}>Collections</Text>
      <View style={styles.collectionList}>
        {MOCK_COLLECTIONS.map((c) => (
          <CollectionCard key={c.id} collection={c} onPress={() => {}} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Actions</Text>
      <View style={styles.buttonGroup}>
        <AppButton variant="primary"   title="Ajouter au panier"    onPress={() => {}} />
        <AppButton variant="secondary" title=" Pay"                  onPress={() => {}} />
        <AppButton variant="subtle"    title="Finaliser ma commande" onPress={() => {}} />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: 60,
    paddingBottom: Theme.spacing.xl,
    gap: Theme.spacing.md,
  },
  sectionTitle: {
    ...Theme.typography.t2,
    color: Theme.colors.dark,
    marginBottom: Theme.spacing.sm,
  },
  collectionList: {
    gap: Theme.spacing.lg,
  },
  buttonGroup: {
    gap: Theme.spacing.md,
  },
});
