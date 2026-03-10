# Theme System Documentation 🎨

Your Student Support App now includes a complete theme system with **4 beautiful themes**!

## 🌈 Available Themes

### 1. **Light Mode** ☀️
- Clean, bright, and professional
- Perfect for daytime use
- High contrast for easy readability
- Color palette: Blue and Purple accents on white

### 2. **Dark Mode** 🌙
- Easy on the eyes
- Great for low-light environments
- Reduces eye strain at night
- Color palette: Cool grays with blue accents

### 3. **Chocolate Mode** ☕
- Warm and cozy feel
- Rich brown tones
- Unique and stylish
- Color palette: Brown, amber, and cream

### 4. **Pink Mode** 💗
- Sweet and vibrant
- Fun and energetic
- Great for a cheerful vibe
- Color palette: Pink gradients with purple accents

## 🎯 How to Use

### For Users:
1. Navigate to the **Profile** page
2. Scroll to the **"Appearance"** section
3. Select your preferred theme by clicking on it
4. Theme changes instantly and is saved automatically!

### Theme Persistence:
- Your selected theme is saved to `localStorage`
- Theme persists across:
  - Page refreshes
  - Browser sessions
  - Different pages in the app

## 🛠️ Technical Implementation

### Theme Provider
Located in `/src/app/components/ThemeProvider.tsx`
- Manages global theme state
- Saves/loads theme from localStorage
- Applies theme to `document.documentElement`

### Theme CSS
Located in `/src/styles/themes.css`
- CSS custom properties (variables) for each theme
- Applied via `data-theme` attribute
- Smooth transitions between themes

### Theme Classes
Use these utility classes in your components:

**Backgrounds:**
- `theme-bg-primary` - Main background
- `theme-bg-secondary` - Secondary background
- `theme-bg-tertiary` - Tertiary background
- `theme-gradient` - Gradient background

**Text Colors:**
- `theme-text-primary` - Main text color
- `theme-text-secondary` - Secondary text
- `theme-text-tertiary` - Tertiary/muted text

**Borders:**
- `theme-border-primary` - Main border color

**Cards:**
- `theme-card` - Card background with shadow

**Accents:**
- `theme-accent-primary` - Accent color
- `theme-accent-hover` - Hover state

### Theme Selector Component
Located in `/src/app/components/ThemeSelector.tsx`
- Beautiful grid layout showing all themes
- Visual preview of each theme
- Selected state with checkmark
- Color dots showing theme palette

## 🎨 Color Palettes

### Light Mode Colors:
- Background: White to Gray-50
- Text: Gray-900 to Gray-400
- Accent: Blue-500
- Gradient: Blue-50 to Purple-50

### Dark Mode Colors:
- Background: Gray-900 to Gray-700
- Text: Gray-100 to Gray-400
- Accent: Blue-400
- Gradient: Slate-800 to Indigo-950

### Chocolate Mode Colors:
- Background: Brown-900 to Brown-700
- Text: Cream to Tan
- Accent: Amber-500
- Gradient: Chocolate to Dark Chocolate

### Pink Mode Colors:
- Background: Pink-50 to Pink-200
- Text: Pink-900 to Pink-700
- Accent: Pink-500
- Gradient: Pink-100 to Purple-100

## 📱 Theme-Aware Components

The following components are fully theme-aware:

✅ **Profile Page** - All sections adapt to theme
✅ **Login Page** - Background gradient changes
✅ **Sign Up Page** - Background gradient changes
✅ **Mobile Layout** - Bottom navigation adapts
✅ **Theme Selector** - Interactive theme switcher

## 🔮 Future Enhancements

Want to add more themes? Here's how:

1. **Add CSS Variables** in `/src/styles/themes.css`:
```css
[data-theme="your-theme"] {
  --bg-primary: r, g, b;
  --text-primary: r, g, b;
  /* ... more variables */
}
```

2. **Update ThemeProvider type**:
```typescript
type Theme = 'light' | 'dark' | 'chocolate' | 'pink' | 'your-theme';
```

3. **Add to ThemeSelector**:
```typescript
{
  id: 'your-theme',
  name: 'Your Theme',
  icon: YourIcon,
  description: 'Description',
  gradient: 'from-color-to-color',
  previewColors: ['bg-color1', 'bg-color2', 'bg-color3'],
}
```

## 💡 Best Practices

1. **Use theme classes** instead of hardcoded colors
2. **Test all themes** when adding new UI
3. **Maintain contrast ratios** for accessibility
4. **Use semantic naming** for theme variables
5. **Consider dark mode first** when designing

## 🎭 Theme Examples

### Good ✅
```tsx
<div className="theme-bg-primary theme-text-primary">
  <h1 className="theme-text-primary">Title</h1>
  <p className="theme-text-secondary">Description</p>
</div>
```

### Avoid ❌
```tsx
<div className="bg-white text-gray-900">
  <h1 className="text-black">Title</h1>
  <p className="text-gray-600">Description</p>
</div>
```

## 📊 Theme Statistics

- **4 unique themes** available
- **20+ CSS variables** per theme
- **5 main pages** fully themed
- **100% theme coverage** in core UI
- **Instant switching** with localStorage persistence

Enjoy your beautiful, customizable app! 🎉
