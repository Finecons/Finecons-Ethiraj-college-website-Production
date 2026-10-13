const express = require("express");
const router = express.Router();
const linkedinController = require("../controllers/linkedin_controller/linkedin.controller");

// OAuth login - redirects to LinkedIn authorization page
router.get("/auth/linkedin", linkedinController.redirectToLinkedIn);

// OAuth callback - handles LinkedIn's redirect with auth code
router.get("/auth/linkedin/callback", linkedinController.linkedinCallback);

// Get LinkedIn profile of connected user
router.get("/api/linkedin/profile", linkedinController.getLinkedInProfile);

// Get LinkedIn posts (organization or member posts)
router.get("/api/linkedin/posts", linkedinController.getLinkedInPosts);

// Check LinkedIn connection status
router.get("/api/linkedin/status", linkedinController.getLinkedInStatus);

// Disconnect LinkedIn (remove stored token)
router.delete("/api/linkedin/disconnect", linkedinController.disconnectLinkedIn);

module.exports = router;
