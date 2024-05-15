// Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar
//Tengo definida la solicitud a GET /users

const { Router } = require("express");
const testController = require("../controllers");
const router = Router();

router.get("/movies", testController.getAllmovies);

module.exports = router;
