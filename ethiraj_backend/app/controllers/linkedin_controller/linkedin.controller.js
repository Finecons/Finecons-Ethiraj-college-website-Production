const axios = require("axios");
const qs = require("querystring");
const db = require("../../models");

const LinkedinToken = db.LinkedinToken;

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI;
const ORGANIZATION_ID = process.env.LINKEDIN_ORGANIZATION_ID;

// 1️⃣ Redirect to LinkedIn Login
exports.redirectToLinkedIn = (req, res) => {
  // Request scopes for reading organization posts (requires Marketing Developer Platform approval)
  // Basic scopes: openid profile email
  // For organization posts: r_organization_social (needs approval)
  // For member posts: r_member_social (needs approval)
  const scope = "openid profile email w_member_social r_basicprofile";

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&state=ethiraj_auto&scope=${encodeURIComponent(scope)}`;

  return res.redirect(authUrl);
};

// 2️⃣ OAuth Callback → Exchange code → Save token
exports.linkedinCallback = async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Missing LinkedIn auth code");
  }

  try {
    const tokenRes = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      qs.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { access_token, expires_in, refresh_token } = tokenRes.data;
    const expiresAt = new Date(Date.now() + expires_in * 1000);

    // Use id=1 to ensure singleton token row
    const existing = await LinkedinToken.findOne({ where: { id: 1 } });

    if (existing) {
      existing.accessToken = access_token;
      existing.refreshToken = refresh_token || existing.refreshToken;
      existing.expiresAt = expiresAt;
      await existing.save();
    } else {
      await LinkedinToken.create({
        id: 1,
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresAt,
      });
    }

    return res.redirect("https://ethiraj.finecons.com/linkedin-feed");
  } catch (error) {
    console.log("LinkedIn OAuth Error:", error.response?.data || error.message);
    return res.status(500).send("LinkedIn authentication failed");
  }
};

// 🔁 Helper: get valid token
async function getValidAccessToken() {
  const tokenRow = await LinkedinToken.findOne({ where: { id: 1 } });

  if (!tokenRow) {
    const err = new Error("LINKEDIN_NOT_CONNECTED");
    throw err;
  }

  if (tokenRow.expiresAt && tokenRow.expiresAt > new Date(Date.now() + 60_000)) {
    return tokenRow.accessToken;
  }

  if (!tokenRow.refreshToken) {
    throw new Error("No refresh token available");
  }

  const refreshRes = await axios.post(
    "https://www.linkedin.com/oauth/v2/accessToken",
    qs.stringify({
      grant_type: "refresh_token",
      refresh_token: tokenRow.refreshToken,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  const { access_token, expires_in, refresh_token } = refreshRes.data;

  tokenRow.accessToken = access_token;
  tokenRow.refreshToken = refresh_token || tokenRow.refreshToken;
  tokenRow.expiresAt = new Date(Date.now() + expires_in * 1000);
  await tokenRow.save();

  return tokenRow.accessToken;
}

// 3️⃣ Get LinkedIn Profile
exports.getLinkedInProfile = async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();

    const meRes = await axios.get("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return res.json({
      success: true,
      message: "LinkedIn profile retrieved successfully",
      data: meRes.data
    });

  } catch (error) {
    if (error.message === "LINKEDIN_NOT_CONNECTED") {
      return res.status(401).json({
        success: false,
        message: "LinkedIn not connected. Please authenticate first.",
        authUrl: `/auth/linkedin`
      });
    }

    console.log("Fetch profile error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch LinkedIn profile",
      error: error.response?.data || error.message,
    });
  }
};

// 4️⃣ Get LinkedIn Posts (Organization/Company Posts)
exports.getLinkedInPosts = async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();
    const count = parseInt(req.query.count) || 10;

    // If organization ID is configured, fetch organization posts
    if (ORGANIZATION_ID) {
      try {
        // Using the Posts API (v2) for organization posts
        // This requires Marketing Developer Platform approval and r_organization_social scope
        const postsRes = await axios.get(
          `https://api.linkedin.com/rest/posts?author=urn%3Ali%3Aorganization%3A${ORGANIZATION_ID}&q=author&count=${count}&sortBy=LAST_MODIFIED`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "X-Restli-Protocol-Version": "2.0.0",
              "LinkedIn-Version": "202401"
            },
          }
        );

        return res.json({
          success: true,
          message: "Organization LinkedIn posts retrieved successfully",
          data: postsRes.data.elements || [],
          count: postsRes.data.elements?.length || 0
        });

      } catch (orgError) {
        console.log("Organization posts fetch failed:", orgError.response?.data || orgError.message);
        
        // If organization posts fail, try alternative approach with UGC Posts
        try {
          const ugcRes = await axios.get(
            `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn%3Ali%3Aorganization%3A${ORGANIZATION_ID})&count=${count}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Restli-Protocol-Version": "2.0.0",
              },
            }
          );

          return res.json({
            success: true,
            message: "Organization posts retrieved (UGC API)",
            data: ugcRes.data.elements || [],
            count: ugcRes.data.elements?.length || 0
          });
        } catch (ugcError) {
          console.log("UGC Posts fetch also failed:", ugcError.response?.data || ugcError.message);
        }
      }
    }

    // Fallback: Try to get member's own posts using shares endpoint
    try {
      // First get the authenticated user's profile ID
      const profileRes = await axios.get("https://api.linkedin.com/v2/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      const personId = profileRes.data.sub;

      // Try fetching member shares/posts
      const sharesRes = await axios.get(
        `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:${personId}&count=${count}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-Restli-Protocol-Version": "2.0.0",
          },
        }
      );

      return res.json({
        success: true,
        message: "Member shares retrieved successfully",
        data: sharesRes.data.elements || [],
        count: sharesRes.data.elements?.length || 0,
        profile: profileRes.data
      });

    } catch (sharesError) {
      console.log("Shares fetch failed:", sharesError.response?.data || sharesError.message);
      
      // Return profile data as minimum if posts aren't accessible
      const profileRes = await axios.get("https://api.linkedin.com/v2/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return res.json({
        success: true,
        message: "Posts API requires additional LinkedIn permissions. Returning profile data.",
        data: [],
        profile: profileRes.data,
        note: "To fetch organization posts, you need Marketing Developer Platform approval and r_organization_social scope. Please apply at https://www.linkedin.com/developers/apps"
      });
    }

  } catch (error) {
    if (error.message === "LINKEDIN_NOT_CONNECTED") {
      return res.status(401).json({
        success: false,
        message: "LinkedIn not connected. Please authenticate first.",
        authUrl: `/auth/linkedin`
      });
    }

    console.log("Fetch posts error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch LinkedIn posts",
      error: error.response?.data || error.message,
    });
  }
};

// 5️⃣ Get LinkedIn Connection Status
exports.getLinkedInStatus = async (req, res) => {
  try {
    const tokenRow = await LinkedinToken.findOne({ where: { id: 1 } });

    if (!tokenRow) {
      return res.json({
        connected: false,
        message: "LinkedIn not connected",
        authUrl: `/auth/linkedin`
      });
    }

    const isExpired = tokenRow.expiresAt && tokenRow.expiresAt < new Date();

    return res.json({
      connected: true,
      expired: isExpired,
      expiresAt: tokenRow.expiresAt,
      message: isExpired ? "Token expired, re-authentication needed" : "LinkedIn connected",
      authUrl: isExpired ? `/auth/linkedin` : null
    });

  } catch (error) {
    console.log("Status check error:", error.message);
    return res.status(500).json({
      connected: false,
      message: "Error checking LinkedIn status",
      error: error.message
    });
  }
};

// 6️⃣ Disconnect LinkedIn (Remove token)
exports.disconnectLinkedIn = async (req, res) => {
  try {
    await LinkedinToken.destroy({ where: { id: 1 } });

    return res.json({
      success: true,
      message: "LinkedIn disconnected successfully"
    });

  } catch (error) {
    console.log("Disconnect error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to disconnect LinkedIn",
      error: error.message
    });
  }
};
