#!/usr/bin/env node

/**
 * Email Configuration Test Script
 * Run: node test-email-config.js
 * 
 * This script tests if your Gmail SMTP configuration is working correctly
 */

require('dotenv').config();

const transporter = require('./app/config/email');

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const emailReceiver = process.env.EMAIL_RECEIVER;

console.log('\n' + '='.repeat(60));
console.log('📧 EMAIL CONFIGURATION TEST');
console.log('='.repeat(60) + '\n');

console.log('Configuration Details:');
console.log(`  Sender Email: ${emailUser}`);
console.log(`  Receiver Email: ${emailReceiver}`);
console.log(`  Password: ${emailPassword.substring(0, 4)}...${emailPassword.slice(-4)}`);
console.log('\n' + '-'.repeat(60) + '\n');

// Test 1: Verify Connection
console.log('🔍 Test 1: Verifying email configuration...');
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Verification failed!\n');
        console.log('Error:', error.message);
        console.log('\nTroubleshooting:');
        console.log('1. Check EMAIL_USER in .env file');
        console.log('2. Check EMAIL_PASSWORD in .env file');
        console.log('3. Verify Gmail account has 2FA enabled');
        console.log('4. Generate new App Password from Gmail Security settings');
        console.log('5. Check internet connection');
        process.exit(1);
    } else {
        console.log('✅ Email service is ready!\n');
        console.log('-'.repeat(60) + '\n');
        
        // Test 2: Send Test Email
        testEmailSending();
    }
});

function testEmailSending() {
    console.log('🔍 Test 2: Sending test email...\n');
    
    const testEmail = {
        from: emailUser,
        to: emailReceiver,
        subject: '✅ Ethiraj College - Email Test',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 5px; }
                    .content { padding: 20px; background: #f9f9f9; margin-top: 10px; border-radius: 5px; }
                    .status { color: #27ae60; font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>✅ Test Email Successful</h1>
                    </div>
                    <div class="content">
                        <p>Hello,</p>
                        <p>This is a test email to verify that your email configuration is working correctly.</p>
                        <p class="status">✓ Email sending is now operational!</p>
                        <p>Your contact form submissions will now automatically send emails when students submit the form.</p>
                        <hr>
                        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
                    </div>
                </div>
            </body>
            </html>
        `
    };
    
    transporter.sendMail(testEmail, (error, info) => {
        if (error) {
            console.log('❌ Failed to send test email!\n');
            console.log('Error Code:', error.code);
            console.log('Error Message:', error.message);
            console.log('\nTroubleshooting:');
            
            if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
                console.log('→ Network connection issue');
                console.log('→ Try using a different network');
                console.log('→ Check if firewall is blocking port 587');
            } else if (error.code === 'EAUTH') {
                console.log('→ Authentication failed');
                console.log('→ Verify EMAIL_USER is correct');
                console.log('→ Verify EMAIL_PASSWORD (App Password) is correct');
                console.log('→ Generate new App Password from Gmail Settings');
            } else if (error.response) {
                console.log('→ SMTP Error:', error.response);
            }
            
            process.exit(1);
        } else {
            console.log('✅ Test email sent successfully!\n');
            console.log('Message ID:', info.messageId);
            console.log('\n' + '='.repeat(60));
            console.log('📧 ALL TESTS PASSED!');
            console.log('='.repeat(60) + '\n');
            console.log('Your email configuration is working correctly.');
            console.log('Contact form submissions will now send emails automatically.\n');
            process.exit(0);
        }
    });
}
