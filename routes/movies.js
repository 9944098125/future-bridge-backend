const router = require("express").Router();
const { postMovies, getMovies } = require("../controllers/movies");

router.route("/post").post(postMovies);
router.route("/movies").get(getMovies);

module.exports = router;
