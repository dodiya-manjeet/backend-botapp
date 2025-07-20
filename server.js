require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const twitterRoutes = require("./routes/twitter");
app.use("/api", twitterRoutes);

app.get("/", (req, res) => {
  res.send(" Infinity Bot Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
