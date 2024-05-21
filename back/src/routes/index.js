// Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar
//Tengo definida la solicitud a GET /users

const { Router } = require("express");
const testController = require("../controllers");
const validarMovieData = require("../middleware/validarMovieData");
const router = Router();

router.post("/movies", validarMovieData, testController.createMovies);

router.get("/movies", testController.getAllmovies);

router.get("/movies/:id", testController.getMovieById);

router.post("/movies/title", testController.getMovieByTitle);

module.exports = router;
