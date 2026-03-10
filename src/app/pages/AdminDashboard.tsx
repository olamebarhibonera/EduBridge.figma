import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../components/AuthProvider';
import { motion } from 'motion/react';
import {
  Users,
  Activity,
  TrendingUp,
  Shield,
  Settings,
  BarChart3,
  Globe,
  MessageSquare,
  Bell,
  Search,
  Filter,
  Download,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
  Crown,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

export function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Redirect if not admin (in a real app, check user role from database)
  const isAdmin = user?.email?.includes('admin'); // Simple check for demo

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const stats = [
    { 
      label: 'Total Users', 
      value: '2,847', 
      change: '+12.5%', 
      trend: 'up', 
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      label: 'Active Sessions', 
      value: '1,234', 
      change: '+8.2%', 
      trend: 'up', 
      icon: Activity,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      label: 'Translations', 
      value: '45.2K', 
      change: '+23.1%', 
      trend: 'up', 
      icon: Globe,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    },
    { 
      label: 'Success Rate', 
      value: '98.5%', 
      change: '+1.2%', 
      trend: 'up', 
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
  ];

  const recentUsers = [
    { id: 1, name: 'Alice Wanjiku', email: 'alice@example.com', status: 'active', joined: '2 hours ago', country: '🇨🇳 China' },
    { id: 2, name: 'Jean Baptiste', email: 'jean@example.com', status: 'active', joined: '5 hours ago', country: '🇫🇷 France' },
    { id: 3, name: 'Mohammed Ali', email: 'mohammed@example.com', status: 'pending', joined: '1 day ago', country: '🇸🇦 Saudi Arabia' },
    { id: 4, name: 'Li Wei', email: 'li@example.com', status: 'active', joined: '2 days ago', country: '🇨🇳 China' },
    { id: 5, name: 'Maria Garcia', email: 'maria@example.com', status: 'inactive', joined: '3 days ago', country: '🇪🇸 Spain' },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registration', user: 'Alice Wanjiku', time: '5 min ago', type: 'success' },
    { id: 2, action: 'Translation request', user: 'Jean Baptiste', time: '12 min ago', type: 'info' },
    { id: 3, action: 'Failed login attempt', user: 'Unknown', time: '23 min ago', type: 'warning' },
    { id: 4, action: 'Budget created', user: 'Li Wei', time: '1 hour ago', type: 'success' },
    { id: 5, action: 'Service search', user: 'Maria Garcia', time: '2 hours ago', type: 'info' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Lock className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-6">You don't have permission to access the admin dashboard.</p>
          <Button onClick={() => navigate('/')} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="luxury-gradient-bg text-white shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/')} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-amber-300" />
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                  {user?.email?.[0].toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user?.email?.split('@')[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin!</h2>
          </div>
          <p className="text-gray-600">Here's what's happening with your platform today.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all border-none">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                      <Icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      {stat.change}
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Users */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 border-none">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Users</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 rounded-xl border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {recentUsers.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{user.name}</h4>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{user.country}</span>
                      <Badge
                        variant={user.status === 'active' ? 'default' : user.status === 'pending' ? 'secondary' : 'outline'}
                        className={
                          user.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : user.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }
                      >
                        {user.status}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 border-none">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-green-100' : 
                      activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      {activity.type === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : activity.type === 'warning' ? (
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Activity className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 truncate">{activity.user}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 rounded-xl">
                View All Activity
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card className="p-6 border-none hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Send Announcement</h4>
                <p className="text-sm text-gray-600">Notify all users about updates</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Security Settings</h4>
                <p className="text-sm text-gray-600">Manage platform security</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">View Analytics</h4>
                <p className="text-sm text-gray-600">Detailed usage reports</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
