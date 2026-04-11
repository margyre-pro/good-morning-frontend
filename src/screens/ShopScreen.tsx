import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductGridScreen from './ProductGridScreen';
import { Theme } from '../constants/Theme';

export default function ShopScreen() {
  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Shop</Text>
        <ProductGridScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scroll: {
    paddingTop: Theme.spacing.lg,
    paddingBottom: 120,
    gap: Theme.spacing.lg,
  },
  title: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
    paddingHorizontal: Theme.spacing.lg,
  },
});
