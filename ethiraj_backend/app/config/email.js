// Email Configuration for Nodemailer
const nodemailer = require('nodemailer');

const smtpHost = process.env.EMAIL_SMTP_HOST || '192.178.211.108';
const smtpServerName = process.env.EMAIL_SMTP_SERVERNAME || 'smtp.gmail.com';

// Create transporter for sending emails.
// Use the IPv4 SMTP endpoint directly because DNS resolution on this host falls back to IPv6 and times out.
const emailTransporter = nodemailer.createTransport({
    host: smtpHost,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        servername: smtpServerName,
    },
    name: smtpServerName,
    connectionTimeout: 10000,
    socketTimeout: 10000,
    logger: true,
    debug: false
});

// Verify transporter configuration
emailTransporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email configuration error:', error.message);
        console.error(`SMTP host: ${smtpHost}`);
        console.error('Please check:');
        console.error('1. EMAIL_USER in .env');
        console.error('2. EMAIL_PASSWORD in .env');
        console.error('3. Gmail account has 2FA enabled and App Password is generated');
        console.error('4. EMAIL_SMTP_HOST / EMAIL_SMTP_SERVERNAME if SMTP endpoint changes');
    } else {
        console.log('✅ Email service is ready to send messages');
    }
});

module.exports = emailTransporter;
