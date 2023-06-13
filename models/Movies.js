const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    rating: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
