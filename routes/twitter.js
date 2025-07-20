// backend/routes/twitter.js
const express = require("express");
const router = express.Router();
const twitterAPI = require("../twitterClient");

router.get("/tweets/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const userRes = await twitterAPI.get(`/users/by/username/${username}`);
    const userId = userRes.data.data.id;

    const tweetsRes = await twitterAPI.get(`/users/${userId}/tweets`, {
      params: {
        max_results: 5, // adjust as needed
      },
    });

    res.json(tweetsRes.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch tweets" });
  }
});

module.exports = router;
