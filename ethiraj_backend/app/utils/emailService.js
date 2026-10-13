// Email Service - Handles all email sending operations
const msGraphMailService = require('./msGraphMailService');
const emailTransporter = require('../config/email');
const contactFormTemplate = require('./emailTemplates/contactFormTemplate');

/**
 * Send email when user submits contact form
 * @param {Object} formData - Contact form data (email, message, contact_us_form_id, createdAt)
 * @returns {Promise<Object>} - Email sending result
 * UPDATED (June 3, 2026): Removed country, phone_number, and full_name from formData
 */
exports.sendContactFormEmail = async (formData) => {
    try {
        const {
            email,
            message,
            contact_us_form_id
        } = formData;

        console.log(`📧 Sending emails for submission #${contact_us_form_id}...`);

        const senderEmail = process.env.MS_GRAPH_SENDER_EMAIL || process.env.EMAIL_USER || 'alumni.ethiraj@finecons.com';
        const contactReceiver = process.env.CONTACT_US_RECEIVER_EMAIL || process.env.EMAIL_RECEIVER || 'ethiraj@ethirajcollege.edu.in';

        // 1. Send admin notification email
        console.log(`📤 Sending admin notification to ${contactReceiver}...`);
        const adminResult = await msGraphMailService.sendMail({
            from: senderEmail,
            to: contactReceiver,
            replyTo: email,
            subject: `New Contact Form Submission #${contact_us_form_id}`,
            text: contactFormTemplate.adminTextTemplate(formData),
            html: contactFormTemplate.adminTemplate(formData)
        });
        console.log(`✅ Admin email dispatched. Status: ${adminResult.success ? 'success' : 'failed'}`);

        // 2. Send user confirmation email
        console.log(`📤 Sending confirmation email to ${email}...`);
        const userResult = await msGraphMailService.sendMail({
            from: senderEmail,
            to: email,
            subject: 'We received your message - Ethiraj College',
            text: contactFormTemplate.userTextTemplate(formData),
            html: contactFormTemplate.userTemplate(formData)
        });
        console.log(`✅ User confirmation email dispatched. Status: ${userResult.success ? 'success' : 'failed'}`);

        return {
            success: true,
            message: 'Emails sent successfully',
            timestamp: new Date(),
            adminMessageId: adminResult.messageId,
            userMessageId: userResult.messageId
        };
    } catch (error) {
        console.error('❌ Error sending contact form email:');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        console.error('Error Details:', error);
        
        return {
            success: false,
            message: error.message,
            error: error,
            code: error.code
        };
    }
};

/**
 * Send welcome email
 * @param {string} email - Recipient email
 * @param {string} name - Recipient name
 * @returns {Promise<Object>} - Email sending result
 */
exports.sendWelcomeEmail = async (email, name) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Ethiraj College',
            html: contactFormTemplate.welcomeTemplate(name)
        };

        await emailTransporter.sendMail(mailOptions);

        return {
            success: true,
            message: 'Welcome email sent successfully'
        };
    } catch (error) {
        console.error('❌ Error sending welcome email:', error.message);
        return {
            success: false,
            message: error.message
        };
    }
};
