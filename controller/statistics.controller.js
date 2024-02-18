const Songs = require("../model/songs.model");

module.exports = {
  TotalStatistics: async (req, res, next) => {
    try {
      const totalSongs = await Songs.countDocuments();
      const totalArtists = await Songs.distinct("artist").count();
      const totalAlbums = await Songs.distinct("album").count();
      const totalGenres = await Songs.distinct("genre").count();
      res.json({
        totalSongs,
        totalArtists,
        totalAlbums,
        totalGenres,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  SongsInEveryGenre: async (req, res, next) => {
    try {
      const genreCounts = await Songs.aggregate([
        { $group: { _id: "$genre", count: { $sum: 1 } } },
      ]);
      res.json(genreCounts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  ArtistSongsAndAlbum: async (req, res, next) => {
    try {
      const artistCounts = await Songs.aggregate([
        {
          $group: {
            _id: "$artist",
            songs: { $sum: 1 },
            albums: { $addToSet: "$album" },
          },
        },
      ]);
      res.json(artistCounts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  SongsInEachAlbum: async (req, res, next) => {
    try {
      const albumConuts = await Songs.aggregate([
        { $group: { _id: "$album", count: { $sum: 1 } } },
      ]);
      res.json(albumConuts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
