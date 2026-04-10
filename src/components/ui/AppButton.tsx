import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { Theme } from '../../constants/Theme';

type Variant = 'primary' | 'secondary' | 'subtle';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  isLoading?: boolean;
}

const variantStyles: Record<Variant, { background: string; text: string }> = {
  primary:   { background: Theme.colors.primary,  text: Theme.colors.white },
  secondary: { background: Theme.colors.dark,     text: Theme.colors.white },
  subtle:    { background: Theme.colors.grayMid,  text: Theme.colors.white },
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  isLoading = false,
}: AppButtonProps) {
  const { background, text } = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: background },
        pressed && styles.pressed,
        isLoading && styles.loading,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={text} />
      ) : (
        <Text style={[styles.label, { color: text }]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: Theme.spacing.lg,
    borderRadius: Theme.radius.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  loading: {
    opacity: 0.7,
  },
  label: {
    ...Theme.typography.t4,
    letterSpacing: 0.2,
  },
});
