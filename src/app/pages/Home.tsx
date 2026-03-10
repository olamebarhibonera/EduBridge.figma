import { MobileLayout } from '../components/MobileLayout';
import { useNavigate } from 'react-router';
import { Languages, Wallet, MapPin, BookOpen, Phone, Building2, Utensils, Bus, Heart, AlertCircle, Sparkles, Globe, Shield } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { motion } from 'motion/react';

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const quickActions = [
    { icon: Languages, label: 'Translate', color: 'from-purple-500 to-purple-600', path: '/translate', glow: 'shadow-purple-500/50' },
    { icon: Wallet, label: 'Budget', color: 'from-amber-500 to-amber-600', path: '/budget', glow: 'shadow-amber-500/50' },
    { icon: MapPin, label: 'Services', color: 'from-blue-500 to-blue-600', path: '/services', glow: 'shadow-blue-500/50' },
  ];

  const emergencyContacts = [
    { name: 'Police', number: '999', icon: AlertCircle },
    { name: 'Ambulance', number: '999', icon: Heart },
    { name: 'Campus Security', number: '020-XXX-XXXX', icon: Building2 },
  ];

  const essentialServices = [
    { icon: BookOpen, label: 'Study Resources', color: 'text-purple-600', bg: 'from-purple-50 to-purple-100' },
    { icon: Utensils, label: 'Restaurants', color: 'text-orange-600', bg: 'from-orange-50 to-orange-100' },
    { icon: Bus, label: 'Transport', color: 'text-green-600', bg: 'from-green-50 to-green-100' },
    { icon: Phone, label: 'SIM Cards', color: 'text-blue-600', bg: 'from-blue-50 to-blue-100' },
    { icon: Building2, label: 'Immigration', color: 'text-red-600', bg: 'from-red-50 to-red-100' },
    { icon: Heart, label: 'Healthcare', color: 'text-pink-600', bg: 'from-pink-50 to-pink-100' },
  ];

  const features = [
    { icon: Globe, text: 'Support for 5 languages', color: 'text-purple-600' },
    { icon: Shield, text: 'Secure & Private', color: 'text-amber-600' },
    { icon: Sparkles, text: 'Premium Experience', color: 'text-blue-600' },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen theme-bg-secondary">
        {/* Hero Section with Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-b-[2rem] luxury-gradient-bg p-8 pb-12"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
          </div>

          {/* Header Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl mb-4 text-center animate-float"
            >
              🇰🇪
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white text-center mb-2"
            >
              {user ? `Karibu, ${user.user_metadata?.name || user.email?.split('@')[0]}! 👋` : 'Welcome to Kenya! 🌟'}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-center text-sm"
            >
              Your premium companion for studying in Kenya
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center mt-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {feature.text}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        <div className="p-6 space-y-6 -mt-6">
          {/* Quick Actions with 3D Effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4"
          >
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(action.path)}
                  className="relative group"
                >
                  <div className="theme-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover-lift overflow-hidden">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`bg-gradient-to-br ${action.color} p-4 rounded-xl shadow-lg ${action.glow} group-hover:shadow-2xl transition-all relative z-10`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold theme-text-primary relative z-10">{action.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Emergency Contacts with Glass Effect */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="glass rounded-2xl p-5 space-y-4 border border-red-200"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-red-100 p-2 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
              </motion.div>
              <h2 className="font-bold text-gray-900">Emergency Contacts</h2>
            </div>
            
            <div className="space-y-2">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-3 hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 p-2 rounded-lg">
                        <Icon className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{contact.name}</span>
                    </div>
                    <a 
                      href={`tel:${contact.number}`} 
                      className="text-red-600 font-bold text-sm px-3 py-1.5 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Essential Services Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="space-y-4"
          >
            <h2 className="font-bold theme-text-primary text-lg">Essential Services</h2>
            <div className="grid grid-cols-2 gap-3">
              {essentialServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.button
                    key={service.label}
                    initial={{ scale: 0, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.6 + index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/services')}
                    className="relative overflow-hidden"
                  >
                    <div className={`bg-gradient-to-br ${service.bg} rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover-lift border border-white/50`}>
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                        <Icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <span className="text-sm font-semibold text-gray-800 text-center leading-tight">{service.label}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Tips with Gradient Border */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 rounded-2xl blur-sm opacity-50" />
            <div className="relative bg-white rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  💡
                </motion.span>
                <h3 className="font-bold text-gray-900">Quick Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Always carry your passport and student ID</span>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Download M-Pesa app for easy payments</span>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Save emergency contacts in your phone</span>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-500 font-bold">•</span>
                  <span>Learn basic Swahili phrases - "Jambo" (Hello)!</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </MobileLayout>
  );
}