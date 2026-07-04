import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Heart } from 'lucide-react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStack';
import { colors, spacing, radius } from '../theme/colors';

type ResultRoute = RouteProp<RootStackParamList, 'Result'>;
type Nav = NativeStackNavigationProp<RootStackParamList, 'Result'>;

export default function ResultScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<ResultRoute>();
  const bpm = route.params?.bpm ?? 75;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <View style={styles.heroWrap}>
          <View style={styles.heroCircle}>
            <Heart color={colors.surface} size={30} fill={colors.surface} />
            <View style={styles.heroBadge}>
              <Check color={colors.surface} size={12} />
            </View>
          </View>
        </View>

        <Text style={styles.bpmValue}>{bpm} bpm</Text>

        <View style={styles.statusPill}>
          <Text style={styles.statusPillText}>Normal Resting Heart Rate</Text>
        </View>

        <Text style={styles.timestamp}>Measured just now</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.primaryButtonText}>Done</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Add Note</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  heroWrap: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  heroCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heroBadge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.surface,
  },
  bpmValue: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  statusPill: {
    alignSelf: 'center',
    backgroundColor: '#E7F2E4',
    borderRadius: radius.full,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: spacing.sm,
  },
  statusPillText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '600',
  },
  timestamp: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: spacing.lg,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
});