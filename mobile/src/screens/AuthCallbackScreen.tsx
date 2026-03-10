import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../utils/supabase';

export function AuthCallbackScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const run = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          navigation.replace('Login');
          return;
        }
        if (data.session) {
          navigation.replace('MainTabs');
        } else {
          navigation.replace('Login');
        }
      } catch {
        navigation.replace('Login');
      }
    };
    run();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🇰🇪</Text>
      <ActivityIndicator size="large" color="#2563eb" style={styles.spinner} />
      <Text style={styles.title}>Completing sign in...</Text>
      <Text style={styles.subtitle}>Please wait while we set up your account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f3ff',
  },
  emoji: { fontSize: 48, marginBottom: 16 },
  spinner: { marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6b7280' },
});
