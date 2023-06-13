const Movies = require("../models/Movies");

const postMovies = async (req, res, next) => {
  const { name, rating, releaseDate } = req.body;
  try {
    const newMovie = new Movies({
      name,
      rating,
      releaseDate,
    });
    await newMovie.save();
    res.status(201).json({
      message: "Movie created successfully",
      movie: newMovie,
    });
  } catch (err) {
    next(err);
  }
};

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.status(200).json({
      message: "Movies fetched successfully",
      movies: movies,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

module.exports = { postMovies, getMovies };
