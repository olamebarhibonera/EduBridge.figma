# Supabase Email Templates

## Welcome Email Template

**Template Name:** `confirm_signup`
**Subject:** Welcome to Kenya Student Companion! 🇰🇪 Confirm Your Email

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      font-size: 60px;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .header p {
      color: rgba(255, 255, 255, 0.9);
      margin: 10px 0 0;
      font-size: 16px;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 20px;
      color: #1f2937;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      color: #4b5563;
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .button-container {
      text-align: center;
      margin: 35px 0;
    }
    .button {
      display: inline-block;
      padding: 16px 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
      transition: transform 0.2s;
    }
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(102, 126, 234, 0.5);
    }
    .features {
      background: #f9fafb;
      border-radius: 16px;
      padding: 25px;
      margin: 30px 0;
    }
    .feature {
      display: flex;
      align-items: start;
      margin-bottom: 15px;
    }
    .feature:last-child {
      margin-bottom: 0;
    }
    .feature-icon {
      font-size: 24px;
      margin-right: 12px;
    }
    .feature-text {
      color: #374151;
      font-size: 15px;
      line-height: 1.6;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e5e7eb, transparent);
      margin: 30px 0;
    }
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }
    .footer-links {
      margin-top: 20px;
    }
    .footer-links a {
      color: #667eea;
      text-decoration: none;
      margin: 0 10px;
    }
    .social {
      margin-top: 20px;
    }
    .social a {
      display: inline-block;
      margin: 0 8px;
      font-size: 24px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">🇰🇪</div>
      <h1>Kenya Student Companion</h1>
      <p>Your Essential Guide to Studying in Kenya</p>
    </div>
    
    <div class="content">
      <div class="greeting">Karibu! Welcome aboard! 🎉</div>
      
      <div class="message">
        We're thrilled to have you join our community of international students in Kenya! You're one step away from accessing all the tools and resources you need to thrive in your new home.
      </div>
      
      <div class="button-container">
        <a href="{{ .ConfirmationURL }}" class="button">Confirm Your Email</a>
      </div>
      
      <div class="features">
        <div class="feature">
          <div class="feature-icon">🌍</div>
          <div class="feature-text">
            <strong>Real-Time Translation</strong><br>
            Communicate seamlessly in English, Swahili, French, Chinese, and Arabic
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">💰</div>
          <div class="feature-text">
            <strong>Smart Budget Tracker</strong><br>
            Manage your finances with KES support and M-Pesa integration
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">📍</div>
          <div class="feature-text">
            <strong>Essential Services Directory</strong><br>
            Find healthcare, government offices, shopping, and more
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <div class="message" style="font-size: 14px;">
        <strong>Note:</strong> This confirmation link will expire in 24 hours for security purposes. If you didn't create an account with Kenya Student Companion, you can safely ignore this email.
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Need help getting started?</strong></p>
      <p>Our support team is here for you 24/7</p>
      
      <div class="footer-links">
        <a href="#">Help Center</a> • 
        <a href="#">Contact Support</a> • 
        <a href="#">Privacy Policy</a>
      </div>
      
      <div style="margin-top: 25px; padding-top: 25px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0;">© 2026 Kenya Student Companion. All rights reserved.</p>
        <p style="margin: 5px 0 0; font-size: 13px;">Empowering international students across Kenya</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Password Recovery Email Template

**Template Name:** `recovery`
**Subject:** Reset Your Password - Kenya Student Companion 🔐

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .icon {
      font-size: 60px;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 20px;
      color: #1f2937;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      color: #4b5563;
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .button-container {
      text-align: center;
      margin: 35px 0;
    }
    .button {
      display: inline-block;
      padding: 16px 48px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4);
    }
    .security-notice {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
    }
    .security-notice strong {
      color: #92400e;
      display: block;
      margin-bottom: 8px;
    }
    .security-notice p {
      color: #78350f;
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
    }
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="icon">🔐</div>
      <h1>Password Reset Request</h1>
    </div>
    
    <div class="content">
      <div class="greeting">Hello there!</div>
      
      <div class="message">
        We received a request to reset your password for your Kenya Student Companion account. Click the button below to create a new password:
      </div>
      
      <div class="button-container">
        <a href="{{ .ConfirmationURL }}" class="button">Reset Password</a>
      </div>
      
      <div class="security-notice">
        <strong>🛡️ Security Notice</strong>
        <p>This password reset link will expire in 1 hour. If you didn't request a password reset, please ignore this email or contact our support team if you have concerns about your account security.</p>
      </div>
      
      <div class="message" style="margin-top: 25px; font-size: 14px;">
        For your security, we never ask for your password via email. Always verify that links are directing to our official domain before entering any credentials.
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Need immediate assistance?</strong></p>
      <p>Contact our 24/7 support team</p>
      <p style="margin-top: 20px;">© 2026 Kenya Student Companion</p>
    </div>
  </div>
</body>
</html>
```

---

## Magic Link Email Template

**Template Name:** `magic_link`
**Subject:** Your Secure Sign-In Link - Kenya Student Companion ✨

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .icon {
      font-size: 60px;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .content {
      padding: 40px 30px;
    }
    .message {
      color: #4b5563;
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .button-container {
      text-align: center;
      margin: 35px 0;
    }
    .button {
      display: inline-block;
      padding: 16px 48px;
      background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
    }
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="icon">✨</div>
      <h1>Your Magic Sign-In Link</h1>
    </div>
    
    <div class="content">
      <div class="message">
        Click the button below to securely sign in to your Kenya Student Companion account. No password needed!
      </div>
      
      <div class="button-container">
        <a href="{{ .ConfirmationURL }}" class="button">Sign In Securely</a>
      </div>
      
      <div class="message" style="font-size: 14px; margin-top: 25px;">
        <strong>Note:</strong> This link expires in 15 minutes and can only be used once. If you didn't request this sign-in link, you can safely ignore this email.
      </div>
    </div>
    
    <div class="footer">
      <p>© 2026 Kenya Student Companion</p>
    </div>
  </div>
</body>
</html>
```

---

## Email Change Confirmation Template

**Template Name:** `email_change`
**Subject:** Confirm Your Email Change - Kenya Student Companion 📧

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .header {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .icon {
      font-size: 60px;
      margin-bottom: 15px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .content {
      padding: 40px 30px;
    }
    .message {
      color: #4b5563;
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .button-container {
      text-align: center;
      margin: 35px 0;
    }
    .button {
      display: inline-block;
      padding: 16px 48px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
    }
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="icon">📧</div>
      <h1>Email Change Request</h1>
    </div>
    
    <div class="content">
      <div class="message">
        We received a request to change your email address for your Kenya Student Companion account. To complete this change, please confirm your new email address:
      </div>
      
      <div class="button-container">
        <a href="{{ .ConfirmationURL }}" class="button">Confirm New Email</a>
      </div>
      
      <div class="message" style="font-size: 14px; margin-top: 25px;">
        If you didn't request this change, please contact our support team immediately to secure your account.
      </div>
    </div>
    
    <div class="footer">
      <p>© 2026 Kenya Student Companion</p>
    </div>
  </div>
</body>
</html>
```

---

## How to Add Templates to Supabase

1. **Log in to your Supabase Dashboard**
2. **Navigate to Authentication > Email Templates**
3. **For each template above:**
   - Select the template type (Confirm signup, Magic Link, etc.)
   - Copy the HTML code
   - Paste it into the template editor
   - Update the subject line
   - Save the template

### Important Variables

Supabase provides these variables for use in templates:
- `{{ .ConfirmationURL }}` - The confirmation/action URL
- `{{ .Token }}` - The confirmation token
- `{{ .TokenHash }}` - Hashed version of the token
- `{{ .SiteURL }}` - Your site URL
- `{{ .Email }}` - User's email address

### Testing Your Templates

After adding templates:
1. Test signup to receive the welcome email
2. Test password reset flow
3. Test email change flow
4. Verify all links work correctly
5. Check rendering across different email clients

### Customization Tips

- Replace the gradient colors to match your brand
- Add your actual logo instead of emojis
- Include real support contact information
- Update footer links to your actual pages
- Add social media icons and links if needed
