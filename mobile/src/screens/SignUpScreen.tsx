import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../utils/supabase';
import { useTheme } from '../contexts';
import { themeColors } from '../theme/colors';

const universities = [
  'University of Nairobi',
  'Kenyatta University',
  'Strathmore University',
  'United States International University (USIU)',
  'Jomo Kenyatta University',
  'Other',
];

export function SignUpScreen() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const colors = themeColors[theme];
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    course: '',
    studentId: '',
    country: '',
    arrivalDate: '',
  });

  const setField = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    setError('');
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      setError('');
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            university: formData.university,
            course: formData.course,
            student_id: formData.studentId,
            country: formData.country,
            arrival_date: formData.arrivalDate,
          },
          emailRedirectTo: 'edubridge://',
        },
      });
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
      if (data?.user && !data?.session) {
        setSuccess(true);
      } else if (data?.session) {
        navigation.replace('MainTabs');
      }
    } catch (err: any) {
      setError(err?.message ?? 'Sign up failed');
    }
    setLoading(false);
  };

  const handleOAuth = async (provider: 'google' | 'facebook') => {
    setError('');
    try {
      await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: 'edubridge://auth/callback' },
      });
    } catch (err: any) {
      setError(err?.message ?? `Failed to sign up with ${provider}`);
    }
  };

  if (success) {
    return (
      <View style={[styles.container, { backgroundColor: colors.bgSecondary }]}>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons name="checkmark-circle" size={64} color="#16a34a" style={styles.successIcon} />
          <Text style={[styles.successTitle, { color: colors.textPrimary }]}>Check Your Email!</Text>
          <Text style={[styles.successText, { color: colors.textSecondary }]}>
            We've sent a confirmation email to {formData.email}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')} style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Go to Login</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.bgSecondary }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={[styles.title, { color: colors.textPrimary }]}>Create Account</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Join the student community in Kenya</Text>

        <View style={styles.stepIndicator}>
          <View style={[styles.stepDot, step >= 1 && styles.stepDotActive]}><Text style={[styles.stepNum, step >= 1 && styles.stepNumActive]}>1</Text></View>
          <View style={[styles.stepLine, step >= 2 && styles.stepLineActive]} />
          <View style={[styles.stepDot, step >= 2 && styles.stepDotActive]}><Text style={[styles.stepNum, step >= 2 && styles.stepNumActive]}>2</Text></View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          {step === 1 && (
            <>
              <View style={styles.oauthRow}>
                <Pressable onPress={() => handleOAuth('google')} style={styles.oauthBtn}>
                  <Text style={styles.oauthText}>Google</Text>
                </Pressable>
                <Pressable onPress={() => handleOAuth('facebook')} style={styles.oauthBtn}>
                  <Text style={styles.oauthText}>Facebook</Text>
                </Pressable>
              </View>
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or sign up with email</Text>
                <View style={styles.dividerLine} />
              </View>
            </>
          )}

          {error ? (
            <View style={styles.errorBox}>
              <Ionicons name="alert-circle" size={20} color="#dc2626" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {step === 1 && (
            <>
              <Text style={styles.label}>Full Name *</Text>
              <TextInput style={styles.input} placeholder="John Doe" value={formData.name} onChangeText={(v) => setField('name', v)} />
              <Text style={styles.label}>Email *</Text>
              <TextInput style={styles.input} placeholder="student@university.ac.ke" value={formData.email} onChangeText={(v) => setField('email', v)} keyboardType="email-address" autoCapitalize="none" />
              <Text style={styles.label}>Password *</Text>
              <TextInput style={styles.input} placeholder="••••••••" value={formData.password} onChangeText={(v) => setField('password', v)} secureTextEntry />
              <Text style={styles.label}>Confirm Password *</Text>
              <TextInput style={styles.input} placeholder="••••••••" value={formData.confirmPassword} onChangeText={(v) => setField('confirmPassword', v)} secureTextEntry />
              <Pressable onPress={handleNextStep} style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Continue</Text>
              </Pressable>
            </>
          )}

          {step === 2 && (
            <>
              <Text style={styles.label}>University</Text>
              <TextInput style={styles.input} placeholder="Select your university" value={formData.university} onChangeText={(v) => setField('university', v)} />
              <Text style={styles.label}>Course of Study</Text>
              <TextInput style={styles.input} placeholder="e.g. Computer Science" value={formData.course} onChangeText={(v) => setField('course', v)} />
              <Text style={styles.label}>Student ID (Optional)</Text>
              <TextInput style={styles.input} placeholder="e.g. STU2026001" value={formData.studentId} onChangeText={(v) => setField('studentId', v)} />
              <Text style={styles.label}>Country of Origin</Text>
              <TextInput style={styles.input} placeholder="e.g. China" value={formData.country} onChangeText={(v) => setField('country', v)} />
              <Text style={styles.label}>Arrival Date in Kenya</Text>
              <TextInput style={styles.input} placeholder="YYYY-MM-DD" value={formData.arrivalDate} onChangeText={(v) => setField('arrivalDate', v)} />
              <View style={styles.rowBtns}>
                <Pressable onPress={() => setStep(1)} style={styles.outlineBtn}>
                  <Text style={[styles.outlineBtnText, { color: colors.accent }]}>Back</Text>
                </Pressable>
                <Pressable onPress={handleSignUp} disabled={loading} style={styles.primaryBtn}>
                  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryBtnText}>Create Account</Text>}
                </Pressable>
              </View>
            </>
          )}
        </View>

        <Pressable onPress={() => navigation.navigate('Login')} style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.textSecondary }]}>Already have an account? </Text>
          <Text style={[styles.footerLink, { color: colors.accent }]}>Sign In</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 24, paddingBottom: 48 },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 24 },
  stepIndicator: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  stepDot: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#e5e7eb', alignItems: 'center', justifyContent: 'center' },
  stepDotActive: { backgroundColor: '#2563eb' },
  stepNum: { color: '#374151', fontWeight: '600' },
  stepNumActive: { color: '#fff' },
  stepLine: { width: 48, height: 4, backgroundColor: '#e5e7eb', marginHorizontal: 4 },
  stepLineActive: { backgroundColor: '#2563eb' },
  card: { borderRadius: 16, padding: 24, marginBottom: 24 },
  oauthRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  oauthBtn: { flex: 1, paddingVertical: 12, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, alignItems: 'center' },
  oauthText: { fontSize: 14, fontWeight: '500', color: '#374151' },
  divider: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#e5e7eb' },
  dividerText: { paddingHorizontal: 16, fontSize: 12, color: '#6b7280' },
  errorBox: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, backgroundColor: '#fef2f2', borderColor: '#fecaca', borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 16 },
  errorText: { flex: 1, fontSize: 14, color: '#991b1b' },
  label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: { height: 44, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, marginBottom: 12, fontSize: 16 },
  primaryBtn: { height: 48, backgroundColor: '#2563eb', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  primaryBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  outlineBtn: { flex: 1, height: 48, borderWidth: 2, borderColor: '#2563eb', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  outlineBtnText: { fontSize: 16, fontWeight: '600' },
  rowBtns: { flexDirection: 'row', gap: 12, marginTop: 16 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  footerText: { fontSize: 14 },
  footerLink: { fontSize: 14, fontWeight: '600' },
  successIcon: { alignSelf: 'center', marginBottom: 16 },
  successTitle: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  successText: { fontSize: 14, textAlign: 'center', marginBottom: 24 },
});
