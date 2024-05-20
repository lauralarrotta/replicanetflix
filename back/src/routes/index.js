// Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar
//Tengo definida la solicitud a GET /users

const { Router } = require("express");
const testController = require("../controllers");
const router = Router();

//obtener las pelicualas de mongoose
router.get("/movies", testController.getAllmovies);

//obtener las peliculas con Id
router.get("/movies/:id", testController.getAllmovies);

// agregar peliculas a la base de datos
router.post("/movies", testController.createMovies);

module.exports = router;
