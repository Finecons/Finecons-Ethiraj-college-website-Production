// Alumni Registration Controller
const msGraphMailService = require('../../utils/msGraphMailService');
const alumniTemplate = require('../../utils/emailTemplates/alumniRegistrationTemplate');
const RESPONSE = require('../../constants/response');
const { StatusCode } = require('../../constants/HttpStatusCode');

/**
 * Handle new alumni registration submission
 */
exports.submitAlumniRegistration = async (req, res) => {
  try {
    const {
      name,
      batchYear,
      dob,
      department,
      mobile,
      email,
      currentAddress,
      designation,
      field,
      otherField,
      contributions
    } = req.body;

    // Validate mandatory fields
    if (!name || !batchYear || !dob || !department || !mobile || !email || !currentAddress || !designation || !field) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "All mandatory profile fields are required."
      });
    }

    const receiverEmail = process.env.ALUMNI_RECEIVER_EMAIL || 'alumnae@ethirajcollege.edu.in';
    const senderEmail = process.env.MS_GRAPH_SENDER_EMAIL || 'alumni.ethiraj@finecons.com';

    console.log(`🎓 [Alumni Controller] Processing registration for ${name} (${department}, ${batchYear})...`);

    // 1. Dispatch Notification Email to Alumnae Association Inbox
    const adminMailResult = await msGraphMailService.sendMail({
      from: senderEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `New Alumni Registration: ${name} - ${department} (${batchYear})`,
      html: alumniTemplate.adminTemplate(req.body)
    });

    // 2. Dispatch Confirmation Receipt Email to the registered alumna
    let userMailResult = { success: false };
    if (email) {
      userMailResult = await msGraphMailService.sendMail({
        from: senderEmail,
        to: email,
        subject: 'Registration Confirmation - Ethiraj College Alumnae Association',
        html: alumniTemplate.userTemplate(req.body)
      });
    }

    return res.status(StatusCode.CREATED.code).send({
      Status: "Success",
      Message: "Alumni registration received successfully and confirmation emails sent.",
      data: [
        {
          name,
          email,
          receiver: receiverEmail,
          admin_email_status: adminMailResult.success ? "sent" : "failed",
          user_email_status: userMailResult.success ? "sent" : "failed",
          timestamp: new Date()
        }
      ]
    });
  } catch (error) {
    console.error('❌ [Alumni Controller] Registration error:', error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Failed to process alumni registration."
    });
  }
};
