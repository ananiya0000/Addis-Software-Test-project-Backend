const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songsSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;
