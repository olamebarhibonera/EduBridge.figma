# Supabase Authentication Setup Guide

This guide will help you configure your Supabase project to enable email confirmation and OAuth providers (Google and Facebook) for your student app.

## 📧 Email Confirmation Setup

### Step 1: Configure Email Templates
1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Authentication** → **Email Templates**
4. Customize the **Confirm signup** email template:
   - Add your app branding
   - Ensure the confirmation link points to your app URL
   - The default template works, but customize for better UX

### Step 2: Enable Email Confirmation
1. Go to **Authentication** → **Providers** → **Email**
2. Ensure **Enable email provider** is toggled ON
3. Check **Confirm email** is enabled
4. Set **Secure email change** to enabled (optional but recommended)

### Step 3: Configure Email Service (SMTP)
By default, Supabase uses rate-limited emails. For production:

1. Go to **Project Settings** → **Auth**
2. Scroll to **SMTP Settings**
3. Enable custom SMTP and configure:
   - **Host**: Your SMTP server (e.g., smtp.sendgrid.net)
   - **Port**: Usually 587 or 465
   - **Username**: Your SMTP username
   - **Password**: Your SMTP password
   - **Sender email**: The email address to send from
   - **Sender name**: Your app name (e.g., "Student Support Kenya")

**Popular SMTP Providers:**
- SendGrid (free tier: 100 emails/day)
- Mailgun (free tier: 5,000 emails/month)
- AWS SES
- Resend

## 🔐 Google OAuth Setup

### Step 1: Create Google OAuth App
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen first if prompted:
   - User Type: External
   - App name: Student Support Kenya
   - User support email: Your email
   - Developer contact: Your email
6. Choose **Web application** as application type
7. Add **Authorized redirect URIs**:
   ```
   https://[YOUR_SUPABASE_PROJECT_REF].supabase.co/auth/v1/callback
   ```
   Example: `https://abcdefghijklm.supabase.co/auth/v1/callback`
8. Copy your **Client ID** and **Client Secret**

### Step 2: Configure in Supabase
1. Go to Supabase Dashboard → **Authentication** → **Providers**
2. Find **Google** in the list
3. Toggle **Enable Google Provider** to ON
4. Paste your **Client ID** and **Client Secret**
5. Click **Save**

### Step 3: Add Site URL
1. Go to **Authentication** → **URL Configuration**
2. Add your app URLs:
   - **Site URL**: `https://your-app-domain.com` (or current Figma Make URL)
   - **Redirect URLs**: Add your app URL to allowed redirects

## 👥 Facebook OAuth Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Choose **Consumer** as the app type
4. Fill in app details:
   - App name: Student Support Kenya
   - Contact email: Your email
5. Once created, go to **Settings** → **Basic**
6. Copy your **App ID** and **App Secret**

### Step 2: Configure Facebook Login
1. In your Facebook app, go to **Products** → Add **Facebook Login**
2. Choose **Web** platform
3. In **Facebook Login** → **Settings**:
   - **Valid OAuth Redirect URIs**: Add
     ```
     https://[YOUR_SUPABASE_PROJECT_REF].supabase.co/auth/v1/callback
     ```
4. Save changes

### Step 3: Configure in Supabase
1. Go to Supabase Dashboard → **Authentication** → **Providers**
2. Find **Facebook** in the list
3. Toggle **Enable Facebook Provider** to ON
4. Paste your **App ID** (as Client ID) and **App Secret** (as Client Secret)
5. Click **Save**

### Step 4: Make Facebook App Live
1. In Facebook Developer Console, ensure your app is in **Live** mode (not Development)
2. Go to **Settings** → **Basic**
3. Toggle **App Mode** to **Live**
4. Add privacy policy and terms URLs if required

## 🔗 Redirect URL Configuration

### For Figma Make (Current Environment)
Your current app URL: `https://app-[unique-id].makeproxy-c.figma.site`

Add this to:
1. **Supabase** → **Authentication** → **URL Configuration**:
   - Site URL: Your current app URL
   - Redirect URLs: Add the same URL

2. **Google Cloud Console**: Add to Authorized redirect URIs:
   ```
   https://[YOUR_SUPABASE_PROJECT_REF].supabase.co/auth/v1/callback
   ```

3. **Facebook Developer Console**: Add to Valid OAuth Redirect URIs:
   ```
   https://[YOUR_SUPABASE_PROJECT_REF].supabase.co/auth/v1/callback
   ```

### For Production Deployment
When you deploy to production, update all redirect URLs in:
- Supabase Auth settings
- Google Cloud Console
- Facebook Developer Console

## ✅ Testing Your Setup

### Test Email Confirmation
1. Sign up with a new email
2. Check your inbox (and spam folder)
3. Click the confirmation link
4. Verify you can log in

### Test Google OAuth
1. Click "Sign in with Google" button
2. Select your Google account
3. Grant permissions
4. Verify you're redirected back to the app and logged in

### Test Facebook OAuth
1. Click "Sign in with Facebook" button
2. Log in with Facebook
3. Grant permissions
4. Verify you're redirected back and logged in

## 🐛 Troubleshooting

### Email confirmation not working
- Check SMTP settings are correct
- Verify email provider is enabled in Supabase
- Check spam folder
- Look at Supabase logs: **Authentication** → **Logs**

### OAuth redirect errors
- Ensure redirect URLs match exactly (with https://)
- Check Site URL is set in Supabase
- Verify OAuth credentials are correct
- Make sure Facebook app is in Live mode

### Users can't log in after signup
- Check if email confirmation is required
- Verify the confirmation email was sent and clicked
- Check Supabase Auth logs for errors

## 📝 Current App Configuration

Your app is already configured to:
- ✅ Send email confirmations on signup
- ✅ Support Google OAuth login/signup
- ✅ Support Facebook OAuth login/signup
- ✅ Automatically handle sessions and redirects
- ✅ Store user metadata (name, university, course, etc.)

All you need to do is configure the Supabase dashboard settings following the steps above!

## 🚀 Next Steps

1. Set up SMTP for production email sending
2. Create and configure Google OAuth app
3. Create and configure Facebook app
4. Test all authentication flows
5. Customize email templates with your branding
6. Set up password reset flow (already supported by Supabase)

---

Need help? Check:
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Google OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Facebook OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-facebook)
