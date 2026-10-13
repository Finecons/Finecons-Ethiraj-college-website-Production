module.exports = (sequelize, Sequelize) => {
  const AdmissionPolicy = sequelize.define(
    "admission_policies",
    {
      admission_policy_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      page_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Admission Policy Page",
        comment: "Name of the page, e.g., 'Admission Policy Page'.",
      },
      section_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Name of the section, e.g., 'Section 1', 'Section 2'.",
      },
      heading: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Heading of the section.",
      },
      sub_heading: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Sub heading of the section.",
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "Main content of the section.",
      },
      additional_data: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Additional data like cards, accordions, or buttons.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Soft delete field (0 = active, 1 = deleted)",
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
      },
    },
    {
      timestamps: true,
    }
  );

  return AdmissionPolicy;
};
