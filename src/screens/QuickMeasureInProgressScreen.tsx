import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, Heart } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStack';
import { colors, spacing, radius } from '../theme/colors';

type Nav = NativeStackNavigationProp<RootStackParamList, 'QuickMeasureInProgress'>;

export default function QuickMeasureInProgressScreen() {
  const navigation = useNavigation<Nav>();
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(() => {
    if (secondsLeft <= 0) {
      navigation.replace('QuickMeasureComplete');
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
          <X color={colors.textMuted} size={22} />
        </Pressable>
        <Text style={styles.headerTitle}>Quick Measure</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Measuring Heart Rate</Text>
        <Text style={styles.subtitle}>
          Place your finger gently over the rear camera and flash.
        </Text>

        <View style={styles.pulseOuter}>
          <View style={styles.pulseMiddle}>
            <View style={styles.pulseInner}>
              <Heart color={colors.surface} size={30} fill={colors.surface} />
            </View>
          </View>
        </View>

        <Text style={styles.progressTitle}>{secondsLeft} seconds remaining</Text>
      </View>

      <Pressable style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel Measurement</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: 260,
    marginBottom: spacing.xl,
  },
  pulseOuter: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(1, 105, 111, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseMiddle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'rgba(1, 105, 111, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseInner: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressTitle: {
    marginTop: spacing.xl,
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  cancelButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.full,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
});