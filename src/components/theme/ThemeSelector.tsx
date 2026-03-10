import { Sun, Moon, Coffee, Heart, Check } from 'lucide-react';
import { useTheme } from '../../contexts';

type Theme = 'light' | 'dark' | 'chocolate' | 'pink';

interface ThemeOption {
  id: Theme;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  gradient: string;
  previewColors: string[];
}

const themeOptions: ThemeOption[] = [
  {
    id: 'light',
    name: 'Light',
    icon: Sun,
    description: 'Clean and bright',
    gradient: 'from-blue-50 to-purple-50',
    previewColors: ['bg-blue-500', 'bg-purple-400', 'bg-blue-300'],
  },
  {
    id: 'dark',
    name: 'Dark',
    icon: Moon,
    description: 'Easy on the eyes',
    gradient: 'from-slate-800 to-slate-900',
    previewColors: ['bg-blue-400', 'bg-slate-600', 'bg-slate-700'],
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    icon: Coffee,
    description: 'Warm and cozy',
    gradient: 'from-amber-800 to-amber-950',
    previewColors: ['bg-amber-500', 'bg-amber-700', 'bg-amber-900'],
  },
  {
    id: 'pink',
    name: 'Pink',
    icon: Heart,
    description: 'Sweet and vibrant',
    gradient: 'from-pink-100 to-purple-100',
    previewColors: ['bg-pink-500', 'bg-pink-300', 'bg-pink-200'],
  },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">App Theme</h3>
      <div className="grid grid-cols-2 gap-3">
        {themeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => setTheme(option.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all ${
                isActive
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Selected Check */}
              {isActive && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              
              {/* Theme Preview */}
              <div className={`w-full h-20 rounded-xl bg-gradient-to-br ${option.gradient} mb-3 flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${
                  option.id === 'light' || option.id === 'pink' ? 'text-gray-700' : 'text-white'
                }`} />
              </div>
              
              {/* Theme Info */}
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-gray-100">{option.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{option.description}</div>
                
                {/* Color Dots */}
                <div className="flex gap-1">
                  {option.previewColors.map((color, idx) => (
                    <div key={idx} className={`w-4 h-4 rounded-full ${color}`} />
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
