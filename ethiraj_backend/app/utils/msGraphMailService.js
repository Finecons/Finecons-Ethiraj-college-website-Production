// Microsoft Graph Mail Service
// Enterprise OAuth 2.0 Email Sending using Microsoft Graph REST API
const axios = require('axios');
const legacyTransporter = require('../config/email');

let cachedToken = null;
let tokenExpiresAt = 0;

/**
 * Acquire Microsoft Graph OAuth 2.0 Access Token
 */
async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && tokenExpiresAt > now + 60000) {
    return cachedToken;
  }

  const tenantId = process.env.MS_GRAPH_TENANT_ID;
  const clientId = process.env.MS_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Microsoft Graph credentials missing in environment variables.');
  }

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('scope', 'https://graph.microsoft.com/.default');
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'client_credentials');

  // Try tenant-specific endpoint first, fallback to /organizations
  const endpoints = [
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    'https://login.microsoftonline.com/organizations/oauth2/v2.0/token'
  ];

  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      const response = await axios.post(endpoint, params.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 10000
      });

      if (response.data && response.data.access_token) {
        cachedToken = response.data.access_token;
        const expiresInSec = response.data.expires_in || 3600;
        tokenExpiresAt = Date.now() + (expiresInSec - 300) * 1000;
        return cachedToken;
      }
    } catch (err) {
      lastError = err;
      const errMsg = err.response ? JSON.stringify(err.response.data) : err.message;
      console.warn(`[MS Graph Auth] Failed on ${endpoint}: ${errMsg}`);
    }
  }

  throw lastError || new Error('Failed to acquire Microsoft Graph access token.');
}

/**
 * Send an email via Microsoft Graph API
 * @param {Object} options - { to, subject, html, text, from, replyTo }
 */
async function sendMail(options) {
  const {
    to,
    subject,
    html,
    text,
    from = process.env.MS_GRAPH_SENDER_EMAIL || 'alumni.ethiraj@finecons.com',
    replyTo
  } = options;

  console.log(`📧 [MS Graph Mailer] Initiating dispatch to ${to} (Subject: "${subject}")...`);

  try {
    const accessToken = await getAccessToken();

    const recipients = Array.isArray(to) ? to : [to];
    const toRecipients = recipients.map((addr) => ({
      emailAddress: { address: addr.trim() }
    }));

    const messagePayload = {
      subject,
      body: {
        contentType: 'HTML',
        content: html || text || ''
      },
      toRecipients,
      saveToSentItems: true
    };

    if (replyTo) {
      messagePayload.replyTo = [
        {
          emailAddress: { address: replyTo.trim() }
        }
      ];
    }

    const sendUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`;

    await axios.post(sendUrl, { message: messagePayload, saveToSentItems: true }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      timeout: 15000
    });

    console.log(`✅ [MS Graph Mailer] Successfully sent email to ${to} via Microsoft Graph API!`);
    return {
      success: true,
      service: 'ms-graph',
      recipient: to,
      timestamp: new Date()
    };
  } catch (graphError) {
    const errDetails = graphError.response ? graphError.response.data : graphError.message;
    console.error('❌ [MS Graph Mailer] Error sending via Graph API:', errDetails);

    // Fallback to legacy transporter if available so submission is not lost
    if (legacyTransporter && process.env.EMAIL_USER) {
      console.log('🔄 [MS Graph Mailer] Attempting fallback delivery via secondary transporter...');
      try {
        const fallbackOptions = {
          from: process.env.EMAIL_USER,
          to,
          subject,
          html,
          text,
          replyTo: replyTo || from
        };
        const fallbackResult = await legacyTransporter.sendMail(fallbackOptions);
        console.log(`✅ [Fallback Delivery] Email dispatched via fallback. MessageId: ${fallbackResult.messageId}`);
        return {
          success: true,
          service: 'fallback-smtp',
          recipient: to,
          messageId: fallbackResult.messageId
        };
      } catch (fallbackError) {
        console.error('❌ [Fallback Delivery] Fallback also failed:', fallbackError.message);
      }
    }

    return {
      success: false,
      service: 'ms-graph',
      error: errDetails,
      message: graphError.message
    };
  }
}

module.exports = {
  getAccessToken,
  sendMail
};
