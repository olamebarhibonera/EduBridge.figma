import { createClient } from '@supabase/supabase-js';

const projectId = 'xhitkkmtytcakjqytlnm';
const publicAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoaXRra210eXRjYWtqcXl0bG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTU2MTEsImV4cCI6MjA4NzA5MTYxMX0.ngCbkwn_f2f8nYiKzS1qCx0rSgbYFsQ4-pqBdsy7kOo';

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);
