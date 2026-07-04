import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, ShieldCheck } from 'lucide-react-native';
import { colors, spacing, radius } from '../theme/colors';

export default function ConnectScreen() {
  const [heartRateEnabled, setHeartRateEnabled] = useState(true);
  const [stepCountEnabled, setStepCountEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroIconWrap}>
          <Heart color={colors.primary} size={26} />
        </View>

        <Text style={styles.title}>Connect Health Data</Text>
        <Text style={styles.description}>
          Sync your daily physiological data to unlock deeper, personalized insights.
          This allows Cordis to build a comprehensive baseline of your well-being.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Requested Access</Text>

          <View style={styles.permissionRow}>
            <View style={styles.permissionTextWrap}>
              <Text style={styles.permissionTitle}>Read Heart Rate</Text>
              <Text style={styles.permissionSubtitle}>
                Continuous monitoring and resting baseline
              </Text>
            </View>
            <Switch
              value={heartRateEnabled}
              onValueChange={setHeartRateEnabled}
              trackColor={{ false: '#D8D5D0', true: colors.primaryLight }}
              thumbColor={heartRateEnabled ? colors.primary : '#fff'}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.permissionRow}>
            <View style={styles.permissionTextWrap}>
              <Text style={styles.permissionTitle}>Read Step Count</Text>
              <Text style={styles.permissionSubtitle}>
                Daily activity and mobility trends
              </Text>
            </View>
            <Switch
              value={stepCountEnabled}
              onValueChange={setStepCountEnabled}
              trackColor={{ false: '#D8D5D0', true: colors.primaryLight }}
              thumbColor={stepCountEnabled ? colors.primary : '#fff'}
            />
          </View>
        </View>

        <View style={styles.privacyBox}>
          <ShieldCheck color={colors.primary} size={18} />
          <Text style={styles.privacyText}>
            Your health data stays encrypted on your device and is only used locally
            unless you explicitly allow sharing in Settings.
          </Text>
        </View>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Connect</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Cancel</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  heroIconWrap: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  permissionTextWrap: {
    flex: 1,
    paddingRight: spacing.md,
  },
  permissionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  permissionSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  privacyBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  privacyText: {
    flex: 1,
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 19,
    marginLeft: spacing.sm,
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