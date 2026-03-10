import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../components/AuthProvider';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback
    const handleCallback = async () => {
      try {
        // Get the session from the URL hash
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          navigate('/login?error=auth_failed');
          return;
        }

        if (data.session) {
          // Successfully authenticated
          navigate('/');
        } else {
          // No session found
          navigate('/login');
        }
      } catch (err) {
        console.error('Callback handling error:', err);
        navigate('/login?error=unexpected');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="inline-block p-4 bg-blue-500 rounded-2xl mb-4 animate-pulse">
          <span className="text-4xl">🇰🇪</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Completing sign in...</h2>
        <p className="text-gray-600">Please wait while we set up your account</p>
      </div>
    </div>
  );
}
