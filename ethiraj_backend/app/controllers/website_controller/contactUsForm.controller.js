const db = require("../../models");
const ContactUsForm = db.contactUsForms;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const emailService = require("../../utils/emailService");

// Add a New Contact Us Form Entry
// UPDATED (June 3, 2026): Removed country, phone_number, and full_name fields
// Only accepts: email, message
exports.addContactUsForm = async (req, res) => {
    try {
        const { email, message } = req.body;

        if (!email || !message) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "All fields (email, message) are required.",
            });
        }

        const newEntry = await ContactUsForm.create({
            email,
            message,
        });

        // Send confirmation emails
        const emailResult = await emailService.sendContactFormEmail({
            email,
            message,
            contact_us_form_id: newEntry.contact_us_form_id,
            createdAt: newEntry.createdAt
        });

        // Prepare response
        const responseData = {
            contact_us_form_id: newEntry.contact_us_form_id,
            email_status: emailResult.success ? 'sent' : 'failed',
            email_message: emailResult.message
        };

        RESPONSE.Success.Message = emailResult.success 
            ? "Contact form entry added successfully and confirmation emails sent."
            : "Contact form entry added but email sending failed.";
        RESPONSE.Success.data = [responseData];
        
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding contact form entry:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add contact form entry.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get All Contact Us Form Entries
exports.getAllContactUsForms = async (req, res) => {
    try {
        const entries = await ContactUsForm.findAll({ where: { delete_status: 0 } });

        RESPONSE.Success.Message = "Contact form entries retrieved successfully.";
        RESPONSE.Success.data = entries;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching contact form entries:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch contact form entries.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Contact Us Form Entry by ID
exports.getContactUsFormById = async (req, res) => {
    try {
        const { contact_us_form_id } = req.params;

        const entry = await ContactUsForm.findOne({ where: { contact_us_form_id: contact_us_form_id, delete_status: 0 } });

        if (!entry) {
            RESPONSE.Failure.Message = "Contact form entry not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        RESPONSE.Success.Message = "Contact form entry retrieved successfully.";
        RESPONSE.Success.data = entry;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching contact form entry by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch contact form entry.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete a Contact Us Form Entry
exports.deleteContactUsForm = async (req, res) => {
    try {
        const { contact_us_form_id } = req.params;

        const entry = await ContactUsForm.findOne({ where: { contact_us_form_id: contact_us_form_id } });

        if (!entry) {
            RESPONSE.Failure.Message = "Contact form entry not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (entry.delete_status === 1) {
            RESPONSE.Failure.Message = "Contact form entry is already deleted.";
            return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
        }

        await ContactUsForm.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { contact_us_form_id: contact_us_form_id } }
        );

        RESPONSE.Success.Message = "Contact form entry deleted successfully.";
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting contact form entry:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete contact form entry.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore a Soft-Deleted Contact Us Form Entry
exports.restoreContactUsForm = async (req, res) => {
    try {
        const { contact_us_form_id } = req.params;

        const entry = await ContactUsForm.findOne({ where: { contact_us_form_id: contact_us_form_id, delete_status: 1 } });

        if (!entry) {
            RESPONSE.Failure.Message = "Contact form entry not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await ContactUsForm.update(
            { delete_status: 0, deletedAt: null },
            { where: { contact_us_form_id: contact_us_form_id } }
        );

        RESPONSE.Success.Message = "Contact form entry restored successfully.";
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring contact form entry:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore contact form entry.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
