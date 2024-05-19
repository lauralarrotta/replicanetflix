const moviesService = require("../service/moviesServer");

module.exports = {
  getAllmovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllmovies(); // Espera a que se resuelva la promesa
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error al obtener películas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las películas." }); // Maneja los errores
    }
  },
};
