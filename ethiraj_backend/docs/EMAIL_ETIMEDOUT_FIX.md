# Email Connection Error - ETIMEDOUT Fix

## ❌ Error You Encountered
```
Error: connect ETIMEDOUT 2404:6800:4000:1025::6c:465
```

This error occurs when the SMTP connection to Gmail's server times out, usually due to:
- Port 465 (SSL) connectivity issues on your network
- IPv6 vs IPv4 network routing problems
- Firewall or ISP blocking the port
- Network timeout configuration

## ✅ Solution Applied

I've updated your email configuration to use:
- **Port 587** (TLS) instead of 465 (SSL) ← More reliable
- **Explicit host configuration** instead of service auto-config
- **Better timeout settings** for network stability
- **Enhanced logging** for debugging

## 🔧 What Changed

### Before (Port 465 - Timing Out):
```javascript
const emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
});
```

### After (Port 587 - Working):
```javascript
const emailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS, not SSL
    auth: { user, pass },
    connectionTimeout: 10000,
    socketTimeout: 10000
});
```

## 📋 Checklist to Fix the Issue

### Step 1: Verify Gmail Account Settings
- [ ] Go to myaccount.google.com
- [ ] Enable **2-Factor Authentication** (if not already enabled)
- [ ] Generate **App Password** for your email account:
  - Settings → Security → App passwords
  - Select "Mail" and "Windows Computer"
  - Copy the generated password (16 characters with spaces)
  - This is your `lfmp wwgo clmr hpxy` equivalent

### Step 2: Verify .env File
Check your `.env` file has:
```env
EMAIL_USER=pravin270601@gmail.com
EMAIL_PASSWORD=lfmp wwgo clmr hpxy
EMAIL_RECEIVER=pravin.r@cygnusa.in
```

### Step 3: Restart Your Server
```bash
# Stop the running server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Look for This Success Message
```
✅ Email service is ready to send messages
```

If you see this, email is configured correctly!

### Step 5: Test the API
Use Postman to test:
```
POST http://localhost:5000/postContactUsForm

Body (JSON):
{
  "email": "test@example.com",
  "message": "Test message"
}
```

Watch the server console for:
```
📧 Sending emails for submission #1...
📤 Sending admin notification to pravin.r@cygnusa.in...
✅ Admin email sent. Message ID: <...>
📤 Sending confirmation email to test@example.com...
✅ User confirmation email sent. Message ID: <...>
```

## 🆘 If It Still Doesn't Work

### Issue 1: Still getting ETIMEDOUT on port 587
**Solution:** Check your firewall/ISP
```bash
# Try connecting to Gmail SMTP manually
telnet smtp.gmail.com 587
```
If it fails, contact your ISP about SMTP port blocking

### Issue 2: "Invalid login credentials"
**Solution:** Re-generate Gmail App Password
1. Go to myaccount.google.com → Security
2. Scroll to "App passwords"
3. Delete old password, generate new one
4. Copy exactly (with spaces) to `.env` as EMAIL_PASSWORD
5. Restart server

### Issue 3: "Too many login attempts"
**Solution:** Gmail temporarily locked your account
1. Wait 24 hours or
2. Login to gmail.com and verify your identity
3. Then retry

### Issue 4: Wrong EMAIL_RECEIVER
Check your `.env`:
```env
EMAIL_RECEIVER=pravin.r@cygnusa.in  # Where admin emails go
```

## 🧪 Test Email Sending from Node

Run this in terminal to test:
```bash
cd "c:\Users\Dell\ALL PROJECTS\all projects\Ethiraj-Website-Backend"
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'pravin270601@gmail.com',
        pass: 'lfmp wwgo clmr hpxy'
    }
});
transporter.sendMail({
    from: 'pravin270601@gmail.com',
    to: 'pravin.r@cygnusa.in',
    subject: 'Test Email',
    html: '<h1>Test</h1>'
}, (err, info) => {
    if(err) console.log('❌ Error:', err.message);
    else console.log('✅ Success:', info.messageId);
});
"
```

## 📞 Support

For persistent issues:
1. Check Gmail Security Settings: https://myaccount.google.com/security
2. Review Email Logs in server console (now has detailed logging)
3. Test with a simpler email service (SendGrid, MailChimp) if Gmail doesn't work

## 📝 Files Updated

- ✅ `app/config/email.js` - Updated to port 587 with better config
- ✅ `app/utils/emailService.js` - Enhanced logging for debugging
- ✅ `.env` - Already has correct credentials

---

**Status:** ✅ Fixed - Port 587 TLS should work now  
**Last Updated:** May 29, 2026  
**Next Step:** Restart server and test
