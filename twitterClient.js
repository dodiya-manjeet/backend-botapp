const axios = require("axios");

const twitterAPI = axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_BEARER}`,
  },
});

module.exports = twitterAPI;
