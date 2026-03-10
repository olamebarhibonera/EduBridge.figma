import { MobileLayout } from '../components/MobileLayout';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Globe, Calendar, Settings, Bell, HelpCircle, LogOut, ChevronRight, Palette, Crown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Switch } from '../components/ui/switch';
import { useAuth } from '../components/AuthProvider';
import { ThemeSelector } from '../components/ThemeSelector';

export function Profile() {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <MobileLayout>
        <div className="p-6 flex items-center justify-center min-h-[50vh] theme-bg-primary">
          <p className="theme-text-secondary">Loading...</p>
        </div>
      </MobileLayout>
    );
  }

  if (!user) {
    return null;
  }

  const userData = {
    name: user?.user_metadata?.name || 'Student Name',
    email: user?.email || '',
    phone: user?.user_metadata?.phone || '+254 712 345 678',
    university: user?.user_metadata?.university || 'University of Nairobi',
    course: user?.user_metadata?.course || 'Computer Science',
    studentId: user?.user_metadata?.student_id || 'STU2026001',
    country: user?.user_metadata?.country || 'International Student',
    arrivalDate: user?.user_metadata?.arrival_date || 'Jan 15, 2026',
  };
  
  // Check if user is admin (simple check for demo - in production use proper role-based system)
  const isAdmin = user?.email?.includes('admin');

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const menuItems = [
    { icon: Settings, label: 'Account Settings', action: () => {} },
    { icon: Bell, label: 'Notifications', action: () => {} },
    { icon: HelpCircle, label: 'Help & Support', action: () => {} },
    { icon: Globe, label: 'Language', subtitle: 'English', action: () => {} },
  ];

  return (
    <MobileLayout>
      <div className="p-6 space-y-6 theme-bg-secondary min-h-screen">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold theme-text-primary">Profile</h1>
          <p className="theme-text-secondary">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-20 h-20 border-4 border-white/30">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-blue-400">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-blue-100 text-sm">{userData.studentId}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 opacity-80" />
              <span>{userData.course} • {userData.university}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 opacity-80" />
              <span>From {userData.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 opacity-80" />
              <span>Arrived {userData.arrivalDate}</span>
            </div>
          </div>
        </div>

        {/* Theme Selector */}
        <div className="theme-card rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 theme-text-primary" />
            <h3 className="font-semibold theme-text-primary">Appearance</h3>
          </div>
          <ThemeSelector />
        </div>

        {/* Contact Information */}
        <div className="theme-card rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold theme-text-primary">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm theme-text-tertiary">Email</div>
                <div className="theme-text-primary">{userData.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm theme-text-tertiary">Phone</div>
                <div className="theme-text-primary">{userData.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm theme-text-tertiary">Campus Location</div>
                <div className="theme-text-primary">Nairobi, Kenya</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="theme-card rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold theme-text-primary">Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 theme-text-secondary" />
                <div>
                  <div className="font-medium theme-text-primary">Push Notifications</div>
                  <div className="text-sm theme-text-tertiary">Receive app updates</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 theme-text-secondary" />
                <div>
                  <div className="font-medium theme-text-primary">Email Updates</div>
                  <div className="text-sm theme-text-tertiary">Weekly summaries</div>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="theme-card rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b theme-border-primary last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 theme-text-secondary" />
                  <div className="text-left">
                    <div className="font-medium theme-text-primary">{item.label}</div>
                    {item.subtitle && (
                      <div className="text-sm theme-text-tertiary">{item.subtitle}</div>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 theme-text-tertiary" />
              </button>
            );
          })}
        </div>

        {/* Admin Dashboard Link - Only show for admin users */}
        {isAdmin && (
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 opacity-90"></div>
            <button
              onClick={() => navigate('/admin')}
              className="relative w-full flex items-center justify-between p-5 text-white hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Crown className="w-6 h-6 text-amber-300" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg flex items-center gap-2">
                    Admin Dashboard
                    <span className="text-xs bg-amber-300 text-amber-900 px-2 py-0.5 rounded-full font-semibold">VIP</span>
                  </div>
                  <div className="text-sm text-white/90">Manage users and view analytics</div>
                </div>
              </div>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Important Documents */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold theme-text-primary">📄 Important Documents</h3>
          <ul className="space-y-2 text-sm theme-text-secondary">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Passport (always carry a copy)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Student ID card
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Student visa/permit
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Admission letter
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>

        {/* App Info */}
        <div className="text-center text-sm theme-text-tertiary pb-4">
          <p>Student Support App v1.0.0</p>
          <p className="mt-1">Made for international students in Kenya 🇰🇪</p>
        </div>
      </div>
    </MobileLayout>
  );
}