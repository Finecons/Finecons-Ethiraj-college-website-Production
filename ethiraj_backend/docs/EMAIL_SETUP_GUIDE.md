# Email Configuration Guide

## Overview
This document explains how to set up and use the email sending functionality for the Contact Form submissions in the Ethiraj Website Backend.

## Files Created

### 1. **Email Configuration** (`app/config/email.js`)
- Sets up Nodemailer transporter with Gmail SMTP
- Uses environment variables for credentials
- Verifies connection on startup

### 2. **Email Service** (`app/utils/emailService.js`)
- `sendContactFormEmail()` - Sends emails to admin and user
- `sendWelcomeEmail()` - Sends welcome email (optional)
- Handles all email operations

### 3. **Email Templates** (`app/utils/emailTemplates/contactFormTemplate.js`)
- **Admin Template**: Shows all form details submitted by student
  - Includes submission ID, timestamp, contact info
  - Clickable email links
  - Reply button to respond directly
  
- **User Template**: Confirmation email for student
  - Confirms receipt of message
  - Shows reference number
  - Lists what happens next
  - Professional branding

### 4. **Updated Controller** (`app/controllers/website_controller/contactUsForm.controller.js`)
- Enhanced `addContactUsForm()` to send emails automatically
- Returns email status in response

## Environment Setup

### Step 1: Create `.env` File
Create a `.env` file in the project root with:

```env
# Email Configuration
EMAIL_USER=pravin270601@gmail.com
EMAIL_PASSWORD=lfmp wwgo clmr hpxy
EMAIL_RECEIVER=peacepravinpubg@gmail.com

# Other configurations
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ethiraj_college
DB_DIALECT=mysql
PORT=3000
NODE_ENV=development
```

### Step 2: Install Dependencies
Nodemailer is already installed, but verify with:
```bash
npm install
```

### Step 3: Verify Email Credentials
The credentials provided are already configured:
- **Sender Email**: pravin270601@gmail.com
- **App Password**: lfmp wwgo clmr hpxy (Gmail App Password)
- **Receiver Email**: peacepravinpubg@gmail.com

## API Endpoint

### POST `/postContactUsForm`
Submit a contact form with automatic email notifications

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "message": "I would like to inquire about admission."
}
```

#### Response (Success)
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

#### Response (Form Saved, Email Failed)
```json
{
  "Status": true,
  "Success": true,
  "Message": "Contact form entry added but email sending failed.",
  "data": [
    {
      "contact_us_form_id": 1,
      "email_status": "failed",
      "email_message": "Error message"
    }
  ]
}
```

## Email Templates

### Email to Admin/Receiver
When a student submits the form, an email is sent to `peacepravinpubg@gmail.com` with:
- ✓ Student's name and email
- ✓ Full message content
- ✓ Submission ID and timestamp
- ✓ Reply button for quick response
- ✓ Professional purple gradient header

### Email to Student/User
A confirmation email is sent to the student's email address with:
- ✓ Confirmation of form receipt
- ✓ Reference number for tracking
- ✓ Submission timestamp
- ✓ What happens next (24-48 hours)
- ✓ Professional green header with success badge

## Example cURL Request

```bash
curl -X POST http://localhost:3000/postContactUsForm \
  -H "Content-Type: application/json" \
  -d '{
    "email": "pravin@example.com",
    "message": "I am interested in the Computer Science program."
  }'
```

## Testing

### Using Postman
1. Create a new POST request to: `http://localhost:3000/postContactUsForm`
2. Set Headers: `Content-Type: application/json`
3. Add the JSON body from the request example above
4. Click Send
5. You should receive two emails:
   - One to `peacepravinpubg@gmail.com` (admin)
   - One to the email provided in the form (student)

### Gmail App Password
The app password `lfmp wwgo clmr hpxy` is configured for `pravin270601@gmail.com`. This is:
- ✓ A 16-character app-specific password
- ✓ More secure than storing the actual Gmail password
- ✓ Can be revoked anytime from Gmail Settings
- ✓ Only works with the specific Gmail account

## Troubleshooting

### Issue: "Error sending contact form email"

**Solution 1**: Check email credentials in `.env`
```env
EMAIL_USER=pravin270601@gmail.com
EMAIL_PASSWORD=lfmp wwgo clmr hpxy
EMAIL_RECEIVER=peacepravinpubg@gmail.com
```

**Solution 2**: Verify environment variables are loaded
- Restart the server: `npm run dev`
- Check console for "✓ Email service is ready to send messages"

**Solution 3**: Check Gmail Account Settings
- Enable "Less secure app access" if needed
- OR use App Passwords (already configured)

### Issue: Only admin receives email, not user

**Solution**: Verify the user's email is valid in the form submission

### Issue: "Invalid login" error

**Solution**: The app password might be incorrect. Re-check:
- Current app password: `lfmp wwgo clmr hpxy`
- Gmail account: `pravin270601@gmail.com`
- No spaces in password when copying

## Features

✅ **Dual Email Sending**
- Automatic email to admin on form submission
- Confirmation email to student with reference number

✅ **Professional Templates**
- Responsive HTML emails
- Gradient headers with icons
- Mobile-friendly design
- Contact information display

✅ **Error Handling**
- Graceful failures - form saves even if email fails
- Email status returned in response
- Detailed console logging for debugging

✅ **Secure Credentials**
- Uses environment variables
- App password instead of main password
- No credentials in source code

## Future Enhancements

1. Add email templates for other forms (admission, inquiry, etc.)
2. Implement email scheduling/queuing with Bull or RabbitMQ
3. Add attachment support (documents, resumes)
4. Add email read receipts
5. Implement email retry logic
6. Add custom email templates per department
7. Email analytics and tracking

## Support

For issues or improvements, please check:
1. `console.log` output in the terminal
2. Email configuration in `app/config/email.js`
3. Email service in `app/utils/emailService.js`
4. Controller implementation in `app/controllers/website_controller/contactUsForm.controller.js`

---

**Created**: May 29, 2026
**Updated**: May 29, 2026
**Status**: ✓ Production Ready
