import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Heart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStack';
import { colors, spacing } from '../theme/colors';

type Nav = NativeStackNavigationProp<RootStackParamList, 'QuickMeasureComplete'>;

export default function QuickMeasureCompleteScreen() {
  const navigation = useNavigation<Nav>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Result', { bpm: 75 });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.completeOuter}>
          <View style={styles.completeInner}>
            <Heart color={colors.surface} size={28} fill={colors.surface} />
            <View style={styles.checkBadge}>
              <Check color={colors.surface} size={12} />
            </View>
          </View>
        </View>

        <Text style={styles.completeText}>Complete</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeOuter: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(1, 105, 111, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeInner: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.bg,
  },
  completeText: {
    marginTop: spacing.xl,
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
});