const Songs = require("../model/songs.model");

module.exports = {
  Createsong: async (req, res, next) => {
    const song = new Songs(req.body);
    try {
      const newSong = await song.save();
      res.status(201).json(newSong);
    } catch (error) {
      res.status(400).json({ message: err.message });
    }
  },
  Getallsongs: async (req, res, next) => {
    try {
      const songs = await Songs.find();
      res.json(songs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  Getsong: async (req, res, next) => {
    try {
    } catch (error) {}
  },
  Updatesong: async (req, res, next) => {
    try {
      const result = await req.body;
      const song = await Songs.findByIdAndUpdate(result._id, {
        title: result.title,
        artist: result.artist,
        album: result.album,
        genre: result.genre,
      });
      res.json(song);
    } catch (error) {}
  },
  Removesong: async (req, res, next) => {
    try {
      const result = await req.body;
      const song = await Songs.findByIdAndDelete(result._id);
      res.json({ message: "Song deleted", _id: result._id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
