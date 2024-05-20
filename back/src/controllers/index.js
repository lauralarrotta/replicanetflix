const moviesService = require("../service/moviesServer");

module.exports = {
  getAllmovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllMovies(); // Espera a que se resuelva la promesa
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error al obtener películas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las películas." }); // Maneja los errores
    }
  },
  createMovies: async (req, res) => {
    // Cambiar resp a res
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await moviesService.createMovies({
        // Cambiar moviesServer a moviesService
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(newMovie);
    } catch (error) {
      console.error("Error al crear la película:", error); // Mensaje de error más descriptivo
      res.status(501).json({ error: "Hubo un error al crear la película." }); // Maneja los errores
    }
  },
};
