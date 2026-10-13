module.exports = (sequelize, Sequelize) => {
    const NewsEvent = sequelize.define(
        "news_events",
        {
            news_event_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            type: {
                type: Sequelize.ENUM("news", "event"),
                allowNull: false,
                defaultValue: "event",
                comment: "Identifies whether this is a news item or an event.",
            },

            heading: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            sub_heading: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            content: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            additional_data: {
                type: Sequelize.TEXT("long"),
                allowNull: true,
                comment: "JSON string for photos, cards, links, etc.",
            },

            status: {
                type: Sequelize.ENUM("active", "inactive"),
                allowNull: false,
                defaultValue: "active",
            },

            event_date: {
                type: Sequelize.DATE,
                allowNull: true,
                comment: "Date of the event if type = event.",
            },

            is_important: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: "1 = Important event, 0 = Normal",
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

    return NewsEvent;
};
