module.exports = (sequelize, Sequelize) => {
    const ContactUsForm = sequelize.define(
        "contact_us_forms", // Table name
        {
            // REMOVED FIELDS (June 1, 2026):
            // - country: Removed - No longer required in contact form
            // - phone_number: Removed - No longer required in contact form
            // Note: Run server restart to apply schema changes with alter: true
            contact_us_form_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                comment: "User's email address",
            },
            message: {
                type: Sequelize.TEXT,
                allowNull: false,
                comment: "Message from the user",
            },
            delete_status: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0, // 0 = active, 1 = deleted
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null,
                comment: "Soft delete timestamp",
            },
        },
        {
            timestamps: true, // Automatically manages createdAt and updatedAt
        }
    );

    return ContactUsForm;
};
