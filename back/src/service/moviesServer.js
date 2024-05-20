//implementar la clase Movie
class Movie {
  constructor(id, title, year, director, duration, genre, rate, poster) {
    if (!title || !poster || !director) {
      throw new Error(
        "No se proporcionaron todas las propiedades necesarias para crear una instancia de Movie"
      );
    }
    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

// modelo de mongoose

const Movies = require("../models/Movies.js");

module.exports = {
  getAllMovies: async () => {
    try {
      const moviesData = await Movies.find();
      const movies = moviesData.map(
        (movie) =>
          new Movie(
            movie.id,
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.genre,
            movie.rate,
            movie.poster
          )
      );
      return movies;
    } catch (error) {
      console.error("Error al obtener películas:", error);
      throw error; // Propaga el error para manejarlo en otro lugar
    }
  },

  getMovieById: async (id) => {
    try {
      const movie = await Movie.findById(id);
      return movie;
    } catch (error) {
      console.error("Error al obtener película por ID:", error);
      throw error; // Propaga el error para manejarlo en otro lugar
    }
  },

  createMovies: async (movieData) => {
    try {
      const newMovie = await Movie.create(movieData);
      return newMovie;
    } catch (error) {
      console.error("Error al crear película:", error);
      throw error; // Propaga el error para manejarlo en otro lugar
    }
  },
};
