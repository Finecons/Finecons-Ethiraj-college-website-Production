module.exports = (sequelize, Sequelize) => {
  const HomeSection = sequelize.define(
    "home_sections",
    {
      section_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      page_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Home Page", // Default value
        comment: "Name of the page, e.g., 'Home Page', 'About Page'.",
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
        comment: "sub Heading of the section.",
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "Main content of the section.",
      },
      additional_data: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
        comment: "Additional data like cards, accordions, or buttons.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0, // Soft delete field (0 = active, 1 = deleted)
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
        allowNull: true, // Optional field, initially null
        defaultValue: null,
      },
    },
    {
      timestamps: true, // Automatically manage createdAt and updatedAt
    }
  );

  return HomeSection;
};
