# EduBridge Mobile (React Native + Expo)

EduBridge rebuilt with **React Native** and **Expo**, keeping all features from the web app.

## Features

- **Auth**: Email/password and OAuth (Google, Facebook) via Supabase
- **Home**: Quick actions (Translate, Budget, Services), emergency contacts, essential services, quick tips
- **Translate**: Source/target language, mock translation, common Swahili phrases, copy/speak
- **Budget**: Income/expense transactions, categories, add transaction modal, balance, breakdown by category
- **Services**: Search, categories, list with address/phone/hours, Get Directions & Call links
- **Profile**: User metadata, theme selector (light/dark/chocolate/pink), contact info, admin link, sign out
- **Admin**: Dashboard (placeholder) for users whose email contains `admin`
- **Themes**: Light, dark, chocolate, pink (persisted with AsyncStorage)

## Setup

1. Install dependencies:

   ```bash
   cd mobile
   npm install
   ```

2. (Optional) Configure Supabase: edit `src/utils/supabase.ts` if you use a different project or env vars.

3. Run the app:

   ```bash
   npx expo start
   ```

   Then press `a` for Android, `i` for iOS, or `w` for web.

## OAuth (Google/Facebook)

For OAuth to work on device:

- In Supabase Dashboard, add your redirect URL (e.g. `edubridge://auth/callback` for deep link).
- Configure the same scheme in `app.json` (`scheme: "edubridge"`).
- Set up Google/Facebook providers in Supabase Auth and add the app’s bundle ID / package name.

## Project structure

- `App.tsx` – Root with SafeArea, Theme, Auth, Navigation
- `src/contexts/` – AuthContext, ThemeContext
- `src/navigation/` – Stack + bottom tabs (RootNavigator)
- `src/screens/` – Home, Login, SignUp, AuthCallback, Translate, Budget, Services, Profile, Admin
- `src/components/` – MobileLayout (tab bar), ThemeSelector
- `src/theme/` – Theme colors (light, dark, chocolate, pink)
- `src/types/` – User, Transaction, Service, ThemeId
- `src/utils/supabase.ts` – Supabase client

## Original project

The web app remains in the repo root (`src/`, Vite + React). This mobile app is in the `mobile/` folder.
