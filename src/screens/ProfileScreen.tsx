import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../constants/Theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.subtitle}>Bientôt disponible</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Theme.spacing.sm,
  },
  title: {
    ...Theme.typography.t1,
    color: Theme.colors.dark,
  },
  subtitle: {
    ...Theme.typography.bodyLg,
    color: Theme.colors.grayMid,
  },
});
