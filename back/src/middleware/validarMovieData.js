const validarMovieData = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "Todos los datos son obligatorios" });
  }

  if (isNaN(year) || year.toString().length !== 4) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos" });
  }

  if (isNaN(rate) || rate < 0 || rate > 10) {
    return res
      .status(400)
      .json({ error: "La calificación debe ser un número entre 0 y 10" });
  }

  next();
};

module.exports = validarMovieData;
