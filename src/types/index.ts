// TypeScript type definitions

// User types
export interface User {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    university?: string;
    course?: string;
    student_id?: string;
    country?: string;
    arrival_date?: string;
  };
}

// Budget types
export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: string;
}

// Service types
export interface Service {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
  description: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'chocolate' | 'pink';

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Translate: undefined;
  Budget: undefined;
  Services: undefined;
  Profile: undefined;
  Login: undefined;
  SignUp: undefined;
  AuthCallback: undefined;
};
