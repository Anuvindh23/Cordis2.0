import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  SlidersHorizontal,
  TrendingDown,
  Camera,
  HeartPulse,
} from 'lucide-react-native';
import { colors, spacing, radius } from '../theme/colors';

const ranges = ['7D', '30D', '90D'] as const;

const weeklyData = [
  { day: 'Mon', value: 58 },
  { day: 'Tue', value: 60 },
  { day: 'Wed', value: 62 },
  { day: 'Thu', value: 61 },
  { day: 'Fri', value: 59 },
  { day: 'Sat', value: 63 },
  { day: 'Sun', value: 60 },
];

const sessions = [
  { id: '1', source: 'Camera Scan', time: 'Today, 8:30 AM', bpm: 61, type: 'camera' },
  { id: '2', source: 'Health Connect', time: 'Yesterday, 9:15 PM', bpm: 65, type: 'health' },
  { id: '3', source: 'Camera Scan', time: 'Mon, 7:45 AM', bpm: 59, type: 'camera' },
];

export default function HistoryScreen() {
  const [selectedRange, setSelectedRange] = useState<(typeof ranges)[number]>('7D');
  const maxValue = Math.max(...weeklyData.map(item => item.value));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>History</Text>
          <Pressable hitSlop={8}>
            <SlidersHorizontal color={colors.textMuted} size={20} />
          </Pressable>
        </View>

        <View style={styles.segmentWrap}>
          {ranges.map(range => {
            const active = selectedRange === range;
            return (
              <Pressable
                key={range}
                onPress={() => setSelectedRange(range)}
                style={[styles.segmentItem, active && styles.segmentItemActive]}
              >
                <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
                  {range}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>AVG RESTING HR</Text>
          <Text style={styles.avgValue}>62 bpm</Text>
          <View style={styles.trendRow}>
            <TrendingDown color={colors.success} size={16} />
            <Text style={styles.trendText}>3 bpm lower this week</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Daily Averages</Text>
            <Text style={styles.cardMeta}>Weekly</Text>
          </View>

          <View style={styles.chartWrap}>
            {weeklyData.map(item => {
              const height = (item.value / maxValue) * 120;
              const isActive = item.day === 'Wed';
              return (
                <View key={item.day} style={styles.barItem}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height,
                        backgroundColor: isActive ? colors.primary : colors.primaryLight,
                      },
                    ]}
                  />
                  <Text style={[styles.barLabel, isActive && styles.barLabelActive]}>
                    {item.day}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Sessions</Text>

          {sessions.map(session => {
            const isCamera = session.type === 'camera';
            return (
              <View key={session.id} style={styles.sessionRow}>
                <View style={styles.sessionIconWrap}>
                  {isCamera ? (
                    <Camera color={colors.primary} size={18} />
                  ) : (
                    <HeartPulse color={colors.primary} size={18} />
                  )}
                </View>

                <View style={styles.sessionTextWrap}>
                  <Text style={styles.sessionTitle}>{session.source}</Text>
                  <Text style={styles.sessionTime}>{session.time}</Text>
                </View>

                <View style={styles.sessionValueWrap}>
                  <Text style={styles.sessionBpm}>{session.bpm}</Text>
                  <Text style={styles.sessionUnit}>bpm</Text>
                </View>
              </View>
            );
          })}
        </View>
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
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  segmentWrap: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceOffset,
    borderRadius: radius.full,
    padding: 4,
    marginBottom: spacing.md,
  },
  segmentItem: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  segmentItemActive: {
    backgroundColor: colors.primary,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  segmentTextActive: {
    color: colors.surface,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textFaint,
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  avgValue: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    marginLeft: 6,
    fontSize: 13,
    color: colors.success,
    fontWeight: '600',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  cardMeta: {
    fontSize: 12,
    color: colors.textMuted,
  },
  chartWrap: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: spacing.md,
  },
  barItem: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 20,
    borderRadius: 10,
    marginBottom: spacing.sm,
  },
  barLabel: {
    fontSize: 11,
    color: colors.textMuted,
  },
  barLabelActive: {
    color: colors.primary,
    fontWeight: '700',
  },
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  sessionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceOffset,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  sessionTextWrap: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  sessionTime: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  sessionValueWrap: {
    alignItems: 'flex-end',
  },
  sessionBpm: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  sessionUnit: {
    fontSize: 11,
    color: colors.textMuted,
  },
});