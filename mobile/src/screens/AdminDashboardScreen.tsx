import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts';

export function AdminDashboardScreen() {
  const navigation = useNavigation<any>();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigation.replace('Login');
      return;
    }
    if (!user.email?.includes('admin')) {
      navigation.replace('MainTabs');
    }
  }, [user, navigation]);

  const stats = [
    { label: 'Total Users', value: '2,847', change: '+12.5%', icon: 'people' as const },
    { label: 'Active Sessions', value: '1,234', change: '+8.2%', icon: 'pulse' as const },
    { label: 'Translations', value: '45.2K', change: '+23.1%', icon: 'globe' as const },
    { label: 'Success Rate', value: '98.5%', change: '+2.1%', icon: 'shield-checkmark' as const },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </Pressable>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((s) => (
          <View key={s.label} style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <Ionicons name={s.icon} size={24} color="#2563eb" />
            </View>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
            <Text style={styles.statChange}>{s.change}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick actions</Text>
        <Text style={styles.cardDesc}>User management and analytics are available in the full web admin.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  content: { padding: 24, paddingBottom: 48 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  backBtn: { marginRight: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#111' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  statCard: { width: '47%', backgroundColor: '#fff', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#e5e7eb' },
  statIconWrap: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#dbeafe', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#111' },
  statLabel: { fontSize: 14, color: '#6b7280', marginTop: 4 },
  statChange: { fontSize: 12, color: '#16a34a', marginTop: 4 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#e5e7eb' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#111', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#6b7280' },
});
