module.exports = (sequelize, Sequelize) => {
  const AboutUsSection = sequelize.define(
    "about_us_sections",
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
        defaultValue: "About Us Page",
        comment: "This identifies that the section belongs to the About Us page.",
      },
      section_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Name of the section, e.g., 'Our Mission', 'Our Team'.",
      },
      heading: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Main heading of the section.",
      },
      sub_heading: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Optional sub heading.",
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "Main textual content of the section.",
      },
      additional_data: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "JSON string for cards, members, achievements, etc.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
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

  return AboutUsSection;
};
