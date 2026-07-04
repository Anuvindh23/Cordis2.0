import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  ChevronRight,
  Lock,
  Link2,
  User,
  CircleHelp,
} from 'lucide-react-native';
import { colors, spacing, radius } from '../theme/colors';

const settingItems = [
  {
    key: 'reminders',
    title: 'Measurement Reminders',
    subtitle: 'Get a daily prompt to take a reading',
    icon: Bell,
  },
  {
    key: 'privacy',
    title: 'Privacy & Permissions',
    subtitle: 'Manage data access and consent',
    icon: Lock,
  },
  {
    key: 'sources',
    title: 'Connected Sources',
    subtitle: 'Review Health Connect integrations',
    icon: Link2,
  },
  {
    key: 'account',
    title: 'Account / Profile',
    subtitle: 'Manage your personal information',
    icon: User,
  },
  {
    key: 'help',
    title: 'Help Center',
    subtitle: 'FAQs and support',
    icon: CircleHelp,
  },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>

        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/80?img=12' }}
            style={styles.avatar}
          />
          <View style={styles.profileTextWrap}>
            <Text style={styles.profileName}>Alex Morgan</Text>
            <Text style={styles.profileSubtext}>Manage your personal information</Text>
          </View>
        </View>

        <View style={styles.listCard}>
          {settingItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Pressable key={item.key} style={styles.listRow}>
                <View style={styles.listIconWrap}>
                  <Icon color={colors.textMuted} size={18} />
                </View>

                <View style={styles.listTextWrap}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listSubtitle}>{item.subtitle}</Text>
                </View>

                <ChevronRight color={colors.textFaint} size={18} />

                {index !== settingItems.length - 1 && <View style={styles.rowDivider} />}
              </Pressable>
            );
          })}
        </View>

        <Pressable style={styles.logoutWrap}>
          <Text style={styles.logoutText}>Log Out</Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  profileCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    marginRight: spacing.sm,
  },
  profileTextWrap: {
    flex: 1,
  },
  profileName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  profileSubtext: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
  listCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    position: 'relative',
  },
  listIconWrap: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceOffset,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  listTextWrap: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  listSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 3,
  },
  rowDivider: {
    position: 'absolute',
    left: 60,
    right: spacing.md,
    bottom: 0,
    height: 1,
    backgroundColor: colors.border,
  },
  logoutWrap: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  logoutText: {
    color: '#B64C4C',
    fontSize: 14,
    fontWeight: '600',
  },
});