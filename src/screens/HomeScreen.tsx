import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartPulse, ChevronRight, RefreshCw } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStack';
import { colors, spacing, radius } from '../theme/colors';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  const userName = 'Alex';
  const latestReading = { bpm: 72, status: 'Resting', timestamp: '2 hours ago' };
  const isConnected = true;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.appName}>Cordis</Text>
          <Pressable
            onPress={() => navigation.navigate('MainTabs', { screen: 'Settings' })}
            hitSlop={8}
            accessibilityLabel="Open profile"
          >
            <Image
              source={{ uri: 'https://i.pravatar.cc/80?img=12' }}
              style={styles.avatar}
            />
          </Pressable>
        </View>

        <Text style={styles.greeting}>Good morning, {userName}</Text>
        <Text style={styles.subGreeting}>
          Your resting heart rate is 2 bpm lower than last week.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.measureCard,
            pressed && styles.measureCardPressed,
          ]}
          onPress={() => navigation.navigate('QuickMeasureInProgress')}
          accessibilityRole="button"
          accessibilityLabel="Start quick measure"
        >
          <View style={styles.measureIconWrap}>
            <HeartPulse color={colors.surface} size={28} strokeWidth={2} />
          </View>
          <Text style={styles.measureTitle}>Quick Measure</Text>
          <Text style={styles.measureSubtitle}>Tap to start reading</Text>
        </Pressable>

        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardLabel}>LATEST READING</Text>
            <RefreshCw color={colors.textFaint} size={16} strokeWidth={2} />
          </View>
          <View style={styles.readingRow}>
            <Text style={styles.bpmValue}>{latestReading.bpm}</Text>
            <Text style={styles.bpmUnit}>bpm</Text>
          </View>
          <Text style={styles.readingStatus}>{latestReading.status}</Text>
        </View>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Connect' })}
          accessibilityRole="button"
        >
          <View style={styles.connectRow}>
            <View
              style={[
                styles.connectDot,
                { backgroundColor: isConnected ? colors.success : colors.textFaint },
              ]}
            />
            <View style={styles.connectTextWrap}>
              <Text style={styles.connectTitle}>Health Data Connected</Text>
              <Text style={styles.connectSubtitle}>
                {isConnected ? 'Syncing active' : 'Not connected'}
              </Text>
            </View>
            <View style={styles.manageRow}>
              <Text style={styles.manageText}>Manage</Text>
              <ChevronRight color={colors.textMuted} size={16} strokeWidth={2} />
            </View>
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subGreeting: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  measureCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  measureCardPressed: {
    backgroundColor: colors.primaryDark,
  },
  measureIconWrap: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  measureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.surface,
    marginBottom: 2,
  },
  measureSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textFaint,
    letterSpacing: 0.5,
  },
  readingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 2,
  },
  bpmValue: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
  },
  bpmUnit: {
    fontSize: 14,
    color: colors.textMuted,
    marginLeft: spacing.xs,
    marginBottom: 6,
  },
  readingStatus: {
    fontSize: 13,
    color: colors.textMuted,
  },
  connectRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    marginRight: spacing.sm,
  },
  connectTextWrap: {
    flex: 1,
  },
  connectTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  connectSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  manageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageText: {
    fontSize: 13,
    color: colors.textMuted,
    marginRight: 2,
  },
});