const express = require("express");
require("dotenv").config();
require("./helper/init_mongo");

const app = express();
const PORT = process.env.PORT || 3000;
const songsRoute = require("./routes/songs.route");
const statisticsRoute = require("./routes/statistics.route");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/songs", songsRoute);
app.use("/api/statistics", statisticsRoute);

app.use(async (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log("Hi from songs api");
});
