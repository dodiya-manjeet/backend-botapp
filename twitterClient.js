// backend/twitterClient.js
const axios = require("axios");

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const twitterAPI = axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

module.exports = twitterAPI;
