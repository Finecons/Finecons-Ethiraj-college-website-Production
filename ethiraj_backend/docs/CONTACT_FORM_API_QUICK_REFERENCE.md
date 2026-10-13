# Contact Form Email API - Quick Reference

## 🚀 Quick Start

The contact form API is now fully configured to send emails automatically when students submit the form.

## 📧 Email Flow

```
Student fills form → Submits → Form saved to DB
                              → Email sent to admin (peacepravinpubg@gmail.com)
                              → Confirmation email sent to student
```

## 🔧 Configuration Status

✅ **Email Setup Complete**
- Sender: pravin270601@gmail.com
- App Password: lfmp wwgo clmr hpxy  
- Receiver (Admin): peacepravinpubg@gmail.com
- Environment variables: Configured in `.env`

## 📨 API Endpoint

### POST `/postContactUsForm`

**Example Request:**
```json
{
  "email": "rahul@example.com",
  "message": "I want to know about the B.Tech Computer Science program"
}
```

**Example Response:**
```json
{
  "Status": true,
  "Success": true,
  "Message": "Contact form entry added successfully and confirmation emails sent.",
  "data": [
    {
      "contact_us_form_id": 1,
      "email_status": "sent",
      "email_message": "Emails sent successfully"
    }
  ]
}
```

## 📋 What Students Receive

**Confirmation Email:**
- ✓ Reference number (#ID)
- ✓ Submission confirmation
- ✓ Expected response time (24-48 hours)
- ✓ Contact information
- ✓ Professional template with college branding

## 📋 What Admin Receives

**Submission Notification:**
- ✓ Student's full details
- ✓ Contact information with clickable links
- ✓ Complete message
- ✓ Submission ID and timestamp
- ✓ Reply button for quick response

## 🧪 Testing with Postman

1. **Method:** POST
2. **URL:** `http://localhost:5000/postContactUsForm`
3. **Headers:** `Content-Type: application/json`
4. **Body (raw JSON):**
```json
{
  "email": "john@example.com",
  "message": "I would like to inquire about admissions"
}
```
5. **Send** → Check both email addresses for emails

## 📁 Files Created/Modified

### Created:
- ✅ `app/config/email.js` - Email transporter configuration
- ✅ `app/utils/emailService.js` - Email sending logic
- ✅ `app/utils/emailTemplates/contactFormTemplate.js` - Email templates
- ✅ `docs/EMAIL_SETUP_GUIDE.md` - Complete setup guide
- ✅ `.env.example` - Environment template

### Modified:
- ✅ `app/controllers/website_controller/contactUsForm.controller.js` - Added email sending
- ✅ `.env` - Added email configuration

## 🔐 Security

- ✓ Uses app-specific password (not main Gmail password)
- ✓ Credentials in environment variables only
- ✓ No hardcoded secrets in source code
- ✓ Error handling prevents email failures from breaking form submission

## ⚙️ Environment Variables

```env
EMAIL_USER=pravin270601@gmail.com
EMAIL_PASSWORD=lfmp wwgo clmr hpxy
EMAIL_RECEIVER=peacepravinpubg@gmail.com
```

## 🚨 Troubleshooting

**Problem:** Email not sending
- Check `.env` file has EMAIL_* variables
- Verify internet connection
- Check Gmail account isn't blocking the app
- Restart the server

**Problem:** Only one email received
- Verify student's email address in form
- Check spam/trash folder

**Problem:** Form not submitting
- Check all required fields are provided
- Verify Content-Type header is `application/json`

## 📞 Support

For email issues:
1. Check console output for error messages
2. Review `docs/EMAIL_SETUP_GUIDE.md` for detailed setup
3. Verify credentials in `.env` file
4. Test email credentials with Gmail app

---

**Status:** ✅ Production Ready  
**Last Updated:** May 29, 2026  
**Setup Time:** < 5 minutes
