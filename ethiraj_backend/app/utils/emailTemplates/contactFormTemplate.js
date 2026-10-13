// Email Templates for Contact Form Submissions
const { format } = require('date-fns');

const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMessageHtml = (value) => escapeHtml(value).replace(/\r?\n/g, '<br />');

const formatMessageText = (value) => String(value ?? '').replace(/\r\n/g, '\n');

/**
 * Template for admin/receiver email
 * Shows all the form details that student submitted
 * UPDATED (June 3, 2026): Removed phone_number, country, and full_name from email display
 */
const adminTemplate = (data) => {
    const {
        email,
        message,
        contact_us_form_id,
        createdAt
    } = data;

    const submissionDate = createdAt ? format(new Date(createdAt), 'dd MMM yyyy, hh:mm a') : format(new Date(), 'dd MMM yyyy, hh:mm a');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <body style="margin:0; padding:0; background-color:#f4f6fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4f6fb; margin:0; padding:24px 0;">
            <tr>
                <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:640px; max-width:640px; background-color:#ffffff; border:1px solid #dbe2ea;">
                        <tr>
                            <td style="background-color:#1d4ed8; padding:24px 32px; color:#ffffff;">
                                <div style="font-size:24px; font-weight:700; line-height:32px;">Contact Form Submission</div>
                                <div style="font-size:14px; line-height:22px; margin-top:6px; color:#dbeafe;">A student has submitted the contact form.</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:24px 32px 8px 32px;">
                                <div style="display:inline-block; background-color:#fee2e2; color:#991b1b; font-size:12px; font-weight:700; padding:8px 12px;">NEW SUBMISSION</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:8px 32px 24px 32px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%;">
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#111827; width:180px;">Submission ID</td>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; color:#374151;">#${escapeHtml(contact_us_form_id || 'N/A')}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#111827; width:180px;">Submitted On</td>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; color:#374151;">${escapeHtml(submissionDate)}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#111827; width:180px;">Email Address</td>
                                        <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; font-size:14px; color:#374151;"><a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8; text-decoration:none;">${escapeHtml(email)}</a></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:0 32px 24px 32px;">
                                <div style="font-size:16px; font-weight:700; color:#111827; margin-bottom:10px;">Message</div>
                                <div style="background-color:#f9fafb; border:1px solid #e5e7eb; padding:16px; font-size:14px; line-height:22px; color:#374151;">${formatMessageHtml(message)}</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:0 32px 32px 32px;">
                                <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Contact%20Form%20Submission" style="display:inline-block; background-color:#1d4ed8; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none; padding:12px 18px;">Reply to Student</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:18px 32px; background-color:#f9fafb; border-top:1px solid #e5e7eb; font-size:12px; line-height:18px; color:#6b7280;">
                                This is an automated notification from the Ethiraj College contact form.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
};

const adminTextTemplate = (data) => {
    const {
        email,
        message,
        contact_us_form_id,
        createdAt
    } = data;

    const submissionDate = createdAt ? format(new Date(createdAt), 'dd MMM yyyy, hh:mm a') : format(new Date(), 'dd MMM yyyy, hh:mm a');

    return [
        'New Contact Form Submission',
        '',
        `Submission ID: #${contact_us_form_id || 'N/A'}`,
        `Submitted On: ${submissionDate}`,
        `Email Address: ${email || ''}`,
        '',
        'Message:',
        formatMessageText(message),
    ].join('\n');
};

const userTextTemplate = (data) => {
    const { email, contact_us_form_id } = data;
    const submissionDate = format(new Date(), 'dd MMM yyyy, hh:mm a');

    return [
        `Hello,`,
        '',
        'We have received your message successfully.',
        `Reference Number: #${contact_us_form_id || 'N/A'}`,
        `Submission Date: ${submissionDate}`,
        `Email: ${email || ''}`,
        '',
        'Our team will get back to you within 24-48 hours.',
    ].join('\n');
};

/**
 * Template for user/student confirmation email
 * Confirms that their message was received
 */
const userTemplate = (data) => {
    const { email, contact_us_form_id } = data;
    const submissionDate = format(new Date(), 'dd MMM yyyy, hh:mm a');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submission Confirmation</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
            }
            .header h1 {
                font-size: 28px;
                margin-bottom: 5px;
            }
            .header p {
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 30px;
            }
            .success-badge {
                display: inline-block;
                background-color: #27ae60;
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .message-box {
                background-color: #e8f8f5;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #27ae60;
                margin-bottom: 20px;
            }
            .message-box p {
                color: #1e4620;
                line-height: 1.6;
                font-size: 16px;
            }
            .info-box {
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 6px;
                margin: 20px 0;
            }
            .info-row {
                padding: 10px 0;
                border-bottom: 1px solid #eeeeee;
            }
            .info-row:last-child {
                border-bottom: none;
            }
            .info-label {
                font-weight: 600;
                color: #333;
                font-size: 13px;
                text-transform: uppercase;
                margin-bottom: 3px;
            }
            .info-value {
                color: #555;
                font-size: 16px;
            }
            .cta-button {
                display: inline-block;
                background-color: #27ae60;
                color: white;
                padding: 12px 30px;
                border-radius: 6px;
                text-decoration: none;
                margin-top: 15px;
                font-weight: 600;
            }
            .cta-button:hover {
                background-color: #229954;
            }
            .what-next {
                background-color: #fef5e7;
                padding: 20px;
                border-radius: 6px;
                margin-top: 20px;
                border-left: 4px solid #f39c12;
            }
            .what-next h3 {
                color: #d68910;
                margin-bottom: 10px;
            }
            .what-next ol {
                margin-left: 20px;
                color: #555;
                line-height: 1.8;
            }
            .what-next li {
                margin-bottom: 8px;
            }
            .footer {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #eeeeee;
                color: #666;
                font-size: 12px;
            }
            .footer-links {
                margin-bottom: 15px;
            }
            .footer-links a {
                color: #667eea;
                text-decoration: none;
                margin: 0 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✓ Form Received</h1>
                <p>Thank you for contacting us!</p>
            </div>

            <div class="content">
                <span class="success-badge">✓ SUCCESSFULLY SUBMITTED</span>

                <div class="message-box">
                    <p>Hello,</p>
                    <p style="margin-top: 10px;">We have successfully received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p>
                </div>

                <div class="info-box">
                    <div class="info-row">
                        <div class="info-label">Reference Number</div>
                        <div class="info-value"><strong>#${contact_us_form_id || 'N/A'}</strong></div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">Submission Date</div>
                        <div class="info-value">${submissionDate}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">Email</div>
                        <div class="info-value">${email}</div>
                    </div>
                </div>

                <div class="what-next">
                    <h3>📋 What Happens Next?</h3>
                    <ol>
                        <li>Our team will review your message</li>
                        <li>We will verify the details you provided</li>
                        <li>You will receive a response via email within 24-48 hours</li>
                        <li>Keep your reference number (#${contact_us_form_id || 'N/A'}) for future correspondence</li>
                    </ol>
                </div>

                <p style="margin-top: 20px; color: #555; line-height: 1.6;">
                    If you have any urgent queries, feel free to contact us directly through our college website or office numbers.
                </p>
            </div>

            <div class="footer">
                <div class="footer-links">
                    <a href="https://ethirajcollege.ac.in">Visit Website</a>
                    <a href="mailto:contact@ethirajcollege.ac.in">Contact Us</a>
                </div>
                <p>© Ethiraj College. All rights reserved.</p>
                <p style="margin-top: 10px; color: #999;">This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

/**
 * Welcome email template for new users/students
 */
const welcomeTemplate = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Ethiraj College</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 20px;
                text-align: center;
            }
            .header h1 {
                font-size: 32px;
                margin-bottom: 5px;
            }
            .logo {
                font-size: 50px;
                margin-bottom: 10px;
            }
            .content {
                padding: 40px;
            }
            .greeting {
                font-size: 20px;
                color: #333;
                margin-bottom: 15px;
            }
            .greeting strong {
                color: #667eea;
            }
            .footer {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #eeeeee;
                color: #666;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🎓</div>
                <h1>Welcome!</h1>
                <p>Welcome to Ethiraj College Family</p>
            </div>

            <div class="content">
                <p class="greeting">Hello <strong>${name}</strong>,</p>
                <p style="color: #555; line-height: 1.6; margin-bottom: 15px;">
                    We are thrilled to have you join our community. Ethiraj College is committed to providing excellent education and fostering a culture of excellence, integrity, and innovation.
                </p>
                <p style="color: #555; line-height: 1.6;">
                    If you have any questions or need assistance, please don't hesitate to reach out to our team.
                </p>
            </div>

            <div class="footer">
                <p>© Ethiraj College. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = {
    adminTemplate,
    adminTextTemplate,
    userTemplate,
    userTextTemplate,
    welcomeTemplate
};
