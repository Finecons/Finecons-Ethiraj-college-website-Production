const db = require("../../models");
const NewsEvent = db.newsEvent;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;


// Add News/Event
// exports.addNewsEvent = async (req, res) => {
//     try {
//         const { heading, sub_heading, content, additional_data, type, status, event_date, is_important } = req.body;

//         const createdByAuthUserId = req.user?.user_id;
//         const createdByAuthUserRoleId = req.user?.userRoleId;

//         if (!createdByAuthUserId || !createdByAuthUserRoleId) {
//             return res.status(StatusCode.BAD_REQUEST.code).send({
//                 ...RESPONSE.Failure,
//                 Message: "Missing required parameters: createdByAuthUserId and createdByAuthUserRoleId.",
//             });
//         }

//         const creator = await AuthUser.findOne({
//             where: {
//                 user_id: createdByAuthUserId,
//                 role_id: createdByAuthUserRoleId,
//                 delete_status: 0
//             },
//         });

//         if (!creator) {
//             return res.status(StatusCode.UNAUTHORIZED.code).send({
//                 ...RESPONSE.Failure,
//                 Message: `Invalid creator: User with ID ${createdByAuthUserId} not found.`,
//             });
//         }

//         const roleExists = await Role.findOne({
//             where: { role_id: createdByAuthUserRoleId, delete_status: 0 },
//         });

//         if (!roleExists) {
//             return res.status(StatusCode.BAD_REQUEST.code).send({
//                 ...RESPONSE.Failure,
//                 Message: `Invalid role ID: ${createdByAuthUserRoleId} does not exist in roles.`,
//             });
//         }

//         if (!heading) {
//             return res.status(StatusCode.BAD_REQUEST.code).send({
//                 ...RESPONSE.Failure,
//                 Message: "Heading is required.",
//             });
//         }

//         // 🔥 RULE: If type = "news", allow only one news record
//         if (type === "news") {
//             const existingNews = await NewsEvent.findOne({
//                 where: { type: "news", delete_status: 0 }
//             });

//             if (existingNews) {
//                 return res.status(StatusCode.BAD_REQUEST.code).send({
//                     ...RESPONSE.Failure,
//                     Message: "Only one News can be created. Update the existing News instead.",
//                 });
//             }
//         }

//         const newEvent = await NewsEvent.create({
//             type: type || "event",
//             heading,
//             sub_heading,
//             content,
//             status: status || "active",
//             event_date,
//             is_important: is_important || 0,
//             additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
//         });

//         RESPONSE.Success.Message = "News/Event added successfully.";
//         RESPONSE.Success.data = [{ news_event_id: newEvent.news_event_id }];
//         return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//     } catch (error) {
//         console.error("Error adding News/Event:", error);
//         RESPONSE.Failure.Message = error.message || "Failed to add News/Event.";
//         return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//     }
// };

exports.addNewsEvent = async (req, res) => {
    try {
        const { heading, sub_heading, content, additional_data, type, status, event_date, mark_as_important } = req.body;

        const createdByAuthUserId = req.user?.user_id;
        const createdByAuthUserRoleId = req.user?.userRoleId;

        if (!createdByAuthUserId || !createdByAuthUserRoleId) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Missing required parameters: createdByAuthUserId and createdByAuthUserRoleId.",
            });
        }

        const creator = await AuthUser.findOne({
            where: {
                user_id: createdByAuthUserId,
                role_id: createdByAuthUserRoleId,
                delete_status: 0
            },
        });

        if (!creator) {
            return res.status(StatusCode.UNAUTHORIZED.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid creator: User with ID ${createdByAuthUserId} not found.`,
            });
        }

        const roleExists = await Role.findOne({
            where: { role_id: createdByAuthUserRoleId, delete_status: 0 },
        });

        if (!roleExists) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid role ID: ${createdByAuthUserRoleId} does not exist in roles.`,
            });
        }

        if (!heading) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Heading is required.",
            });
        }

        // 🔥 RULE: If type = "news", allow only one news record
        if (type === "news") {
            const existingNews = await NewsEvent.findOne({
                where: { type: "news", delete_status: 0 }
            });

            if (existingNews) {
                return res.status(StatusCode.BAD_REQUEST.code).send({
                    ...RESPONSE.Failure,
                    Message: "Only one News can be created. Update the existing News instead.",
                });
            }
        }

        // -------------------------------------
        // CREATE THE EVENT (default not important)
        // -------------------------------------
        let newEvent = await NewsEvent.create({
            type: type || "event",
            heading,
            sub_heading,
            content,
            status: status || "active",
            event_date,
            is_important: 0,  // default
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        // ---------------------------------------------------
        // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
        // ---------------------------------------------------
        if (mark_as_important === true && newEvent.type === "event") {

            // Find all important events
            const importantEvents = await NewsEvent.findAll({
                where: {
                    type: "event",
                    is_important: 1,
                    delete_status: 0
                },
                order: [["updatedAt", "ASC"]] // oldest first
            });

            // If 2 already exist → unmark the oldest
            if (importantEvents.length >= 2) {
                const oldest = importantEvents[0];

                await NewsEvent.update(
                    { is_important: 0 },
                    { where: { news_event_id: oldest.news_event_id } }
                );
            }

            // Mark the new event as important
            await NewsEvent.update(
                { is_important: 1 },
                { where: { news_event_id: newEvent.news_event_id } }
            );

            newEvent.is_important = 1; // update local variable also
        }

        RESPONSE.Success.Message = "News/Event added successfully.";
        RESPONSE.Success.data = [{ news_event_id: newEvent.news_event_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);

    } catch (error) {
        console.error("Error adding News/Event:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add News/Event.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get All
exports.getAllNewsEvents = async (req, res) => {
    try {
        const events = await NewsEvent.findAll({
            where: { delete_status: 0 },
        });

        const parsed = events.map((e) => {
            const additionalData = JSON.parse(e.additional_data || "[]");
            return { ...e.toJSON(), additional_data: additionalData };
        });

        RESPONSE.Success.Message = "News/Events retrieved successfully.";
        RESPONSE.Success.data = parsed;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching News/Events:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch News/Events.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get by ID
exports.getNewsEventById = async (req, res) => {
    try {
        const { news_event_id } = req.params;

        const data = await NewsEvent.findOne({
            where: { news_event_id, delete_status: 0 },
        });

        if (!data) {
            RESPONSE.Failure.Message = "News/Event not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsed = {
            ...data.toJSON(),
            additional_data: JSON.parse(data.additional_data || "[]"),
        };

        RESPONSE.Success.Message = "News/Event retrieved successfully.";
        RESPONSE.Success.data = parsed;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching News/Event by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch News/Event.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get Only News
exports.getNews = async (req, res) => {
    try {
        const news = await NewsEvent.findOne({
            where: { type: "news", delete_status: 0 },
        });

        if (!news) {
            RESPONSE.Failure.Message = "No News found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsed = {
            ...news.toJSON(),
            additional_data: JSON.parse(news.additional_data || "[]"),
        };

        RESPONSE.Success.Message = "News retrieved successfully.";
        RESPONSE.Success.data = parsed;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);

    } catch (error) {
        console.error("Error fetching News:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch News.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Only Events
exports.getEvents = async (req, res) => {
    try {
        const events = await NewsEvent.findAll({
            where: { type: "event", delete_status: 0 },
            order: [["event_date", "DESC"]], // optional sorting
        });

        if (!events || events.length === 0) {
            RESPONSE.Failure.Message = "No Events found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsed = events.map((e) => ({
            ...e.toJSON(),
            additional_data: JSON.parse(e.additional_data || "[]"),
        }));

        RESPONSE.Success.Message = "Events retrieved successfully.";
        RESPONSE.Success.data = parsed;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);

    } catch (error) {
        console.error("Error fetching Events:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Events.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Mark Event as Important (Only 2 allowed)
exports.markEventImportant = async (req, res) => {
    try {
        const { news_event_id } = req.params;

        // Check event exists
        const event = await NewsEvent.findOne({
            where: { news_event_id, delete_status: 0 },
        });

        if (!event) {
            RESPONSE.Failure.Message = "Event not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        // -----------------------------
        // Find already important events
        // -----------------------------
        const importantEvents = await NewsEvent.findAll({
            where: {
                type: "event",
                is_important: 1,
                delete_status: 0
            },
            order: [["updatedAt", "ASC"]] // oldest first
        });

        // If already important, return success (no need to update)
        if (event.is_important === 1) {
            RESPONSE.Success.Message = "Already marked as important.";
            RESPONSE.Success.data = [];
            return res.status(StatusCode.OK.code).send(RESPONSE.Success);
        }

        // -----------------------------
        // Max 2 important allowed
        // -----------------------------
        if (importantEvents.length >= 2) {
            const oldest = importantEvents[0]; // oldest important

            await NewsEvent.update(
                { is_important: 0 },
                { where: { news_event_id: oldest.news_event_id } }
            );
        }

        // -----------------------------
        // Mark this event as important
        // -----------------------------
        await NewsEvent.update(
            { is_important: 1 },
            { where: { news_event_id } }
        );

        RESPONSE.Success.Message = "Event marked as important successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);

    } catch (error) {
        console.error("Error marking event important:", error);
        RESPONSE.Failure.Message = error.message || "Failed to mark event important.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Update
// exports.updateNewsEvent = async (req, res) => {
//     try {
//         const { news_event_id } = req.params;
//         const { type, heading, sub_heading, content, status, event_date, additional_data, is_important } = req.body;

//         const eventData = await NewsEvent.findOne({
//             where: { news_event_id, delete_status: 0 },
//         });

//         if (!eventData) {
//             RESPONSE.Failure.Message = "News/Event not found or deleted.";
//             return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
//         }

//         const updatedAdditionalData =
//             additional_data !== undefined ? additional_data : JSON.parse(eventData.additional_data || "[]");

//         await NewsEvent.update(
//             {
//                 type,
//                 heading,
//                 sub_heading,
//                 content,
//                 status,
//                 event_date,
//                 is_important,
//                 additional_data: JSON.stringify(updatedAdditionalData),
//             },
//             { where: { news_event_id } }
//         );

//         RESPONSE.Success.Message = "News/Event updated successfully.";
//         RESPONSE.Success.data = [];
//         return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//     } catch (error) {
//         console.error("Error updating News/Event:", error);
//         RESPONSE.Failure.Message = error.message || "Failed to update News/Event.";
//         return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//     }
// };

exports.updateNewsEvent = async (req, res) => {
    try {
        const { news_event_id } = req.params;
        const { type, heading, sub_heading, content, status, event_date, additional_data, mark_as_important } = req.body;

        const eventData = await NewsEvent.findOne({
            where: { news_event_id, delete_status: 0 },
        });

        if (!eventData) {
            RESPONSE.Failure.Message = "News/Event not found or deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        // ------------------------------------
        // Prevent MORE THAN ONE NEWS rule
        // ------------------------------------
        if (type === "news") {
            const existingNews = await NewsEvent.findOne({
                where: { type: "news", delete_status: 0 }
            });

            if (existingNews && existingNews.news_event_id !== Number(news_event_id)) {
                return res.status(StatusCode.BAD_REQUEST.code).send({
                    ...RESPONSE.Failure,
                    Message: "Only one News is allowed. Update the existing one instead.",
                });
            }
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(eventData.additional_data || "[]");

        // ------------------------------------
        // UPDATE MAIN EVENT DATA
        // ------------------------------------
        await NewsEvent.update(
            {
                type,
                heading,
                sub_heading,
                content,
                status,
                event_date,
                additional_data: JSON.stringify(updatedAdditionalData),
            },
            { where: { news_event_id } }
        );

        // -----------------------------------------------
        // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
        // -----------------------------------------------
        if (mark_as_important === true && type === "event") {

            // Fetch all important events
            const importantEvents = await NewsEvent.findAll({
                where: {
                    type: "event",
                    is_important: 1,
                    delete_status: 0
                },
                order: [["updatedAt", "ASC"]]  // oldest first
            });

            // If the current event is already important → no action needed
            if (eventData.is_important === 1) {
                // do nothing
            }
            else {
                // If already 2 important → unmark the oldest
                if (importantEvents.length >= 2) {
                    const oldest = importantEvents[0];

                    await NewsEvent.update(
                        { is_important: 0 },
                        { where: { news_event_id: oldest.news_event_id } }
                    );
                }

                // Mark current as important
                await NewsEvent.update(
                    { is_important: 1 },
                    { where: { news_event_id } }
                );
            }
        }

        RESPONSE.Success.Message = "News/Event updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);

    } catch (error) {
        console.error("Error updating News/Event:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update News/Event.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Soft Delete
exports.deleteNewsEvent = async (req, res) => {
    try {
        const { news_event_id } = req.params;

        const eventData = await NewsEvent.findOne({ where: { news_event_id } });

        if (!eventData) {
            RESPONSE.Failure.Message = "News/Event not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (eventData.delete_status === 1) {
            RESPONSE.Failure.Message = "News/Event already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await NewsEvent.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { news_event_id } }
        );

        RESPONSE.Success.Message = "News/Event soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting News/Event:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete News/Event.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore
exports.restoreNewsEvent = async (req, res) => {
    try {
        const { news_event_id } = req.params;

        const eventData = await NewsEvent.findOne({
            where: { news_event_id, delete_status: 1 },
        });

        if (!eventData) {
            RESPONSE.Failure.Message = "News/Event not found or not deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await NewsEvent.update(
            { delete_status: 0, deletedAt: null },
            { where: { news_event_id } }
        );

        RESPONSE.Success.Message = "News/Event restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring News/Event:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore News/Event.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get Only Important News & Events
// exports.getImportantNewsAndEvents = async (req, res) => {
//     try {
//         // ------------------------------
//         // Get NEWS (only 1) — no is_important filter
//         // ------------------------------
//         const importantNews = await NewsEvent.findOne({
//             where: {
//                 type: "news",
//                 delete_status: 0
//             }
//         });

//         // ------------------------------
//         // Get Important EVENTS (max 2)
//         // ------------------------------
//         const importantEvents = await NewsEvent.findAll({
//             where: {
//                 type: "event",
//                 is_important: 1,
//                 delete_status: 0
//             },
//             order: [["updatedAt", "DESC"]] // latest important on top
//         });

//         return res.status(200).send({
//             status: true,
//             Message: "Important News & Events fetched successfully",
//             data: {
//                 news: importantNews || null,
//                 events: importantEvents || []
//             }
//         });

//     } catch (error) {
//         console.error("Error fetching important News/Events:", error);
//         return res.status(500).send({
//             status: false,
//             Message: error.message || "Failed to fetch important News/Events."
//         });
//     }
// };

// Get Only Important News & Events
exports.getImportantNewsAndEvents = async (req, res) => {
    try {

        // ------------------------------
        // Get NEWS (only 1) — no is_important filter
        // ------------------------------
        const newsRecord = await NewsEvent.findOne({
            where: {
                type: "news",
                delete_status: 0
            }
        });

        // Parse the news data (same logic as getAllNewsEvents)
        let parsedNews = null;
        if (newsRecord) {
            parsedNews = {
                ...newsRecord.toJSON(),
                additional_data: JSON.parse(newsRecord.additional_data || "[]")
            };
        }

        // ------------------------------
        // Get Important EVENTS (max 2)
        // ------------------------------
        const importantEvents = await NewsEvent.findAll({
            where: {
                type: "event",
                is_important: 1,
                delete_status: 0
            },
            order: [["updatedAt", "DESC"]],
            limit: 2
        });

        // Parsed logic for events
        const parsedEvents = importantEvents.map((e) => ({
            ...e.toJSON(),
            additional_data: JSON.parse(e.additional_data || "[]")
        }));

        return res.status(200).send({
            status: true,
            Message: "Important News & Events fetched successfully",
            data: {
                news: parsedNews,
                events: parsedEvents
            }
        });

    } catch (error) {
        console.error("Error fetching important News/Events:", error);
        return res.status(500).send({
            status: false,
            Message: error.message || "Failed to fetch important News/Events."
        });
    }
};
