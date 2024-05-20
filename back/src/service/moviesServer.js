// //implementar la clase Movie
// class Movie {
//   constructor(id, title, year, director, duration, genre, rate, poster) {
//     if (!title || !poster || !director) {
//       throw new Error(
//         "No se proporcionaron todas las propiedades necesarias para crear una instancia de Movie"
//       );
//     }
//     this.id = id;
//     this.title = title;
//     this.year = year;
//     this.director = director;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }

// modelo de mongoose

const Movies = require("../models/Movies.js");

module.exports = {
  // Función para obtener datos de la API de películas y mapearlos a instancias de Movie
  getAllmovies: async () => {
    const moviesData = await Movies.find();
    return moviesData;
    //   const movies = moviesData.map(
    //     (movie) =>
    //       new Movie(
    //         movie.id,
    //         movie.title,
    //         movie.year,
    //         movie.director,
    //         movie.duration,
    //         movie.genre,
    //         movie.rate,
    //         movie.poster
    //       )
    //   );
    //   return movies;
  },

  getMovieById: async (id) => {
    const movie = await Movies.findById(id);
    return movie;
  },

  createMovies: async (movie) => {
    const newMovie = await Movies.create(movie);
    return newMovie;
  },
};
