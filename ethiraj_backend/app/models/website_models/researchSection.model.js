module.exports = (sequelize, Sequelize) => {
  const ResearchSection = sequelize.define(
    "research_sections",
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
        defaultValue: "Research Page",
        comment: "Name of the page, e.g., 'Research Page'.",
      },

      section_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Name of the section.",
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
      },
    },
    {
      timestamps: true,
    }
  );

  return ResearchSection;
};
