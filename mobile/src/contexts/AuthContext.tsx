import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
  refreshSession: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshSession = async () => {
    try {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();
      if (currentSession?.user) {
        setSession(currentSession);
        setUser({
          id: currentSession.user.id,
          email: currentSession.user.email ?? '',
          user_metadata: currentSession.user.user_metadata,
        });
      } else {
        setSession(null);
        setUser(null);
      }
    } catch (error) {
      console.error('Session refresh error:', error);
      setSession(null);
      setUser(null);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      await refreshSession();
      setLoading(false);
    };
    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, currentSession) => {
      if (currentSession?.user) {
        setSession(currentSession);
        setUser({
          id: currentSession.user.id,
          email: currentSession.user.email ?? '',
          user_metadata: currentSession.user.user_metadata,
        });
      } else {
        setSession(null);
        setUser(null);
      }
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}
