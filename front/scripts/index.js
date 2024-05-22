// Importar la función initializeForm del archivo CreateMovie.js
const { initializeForm } = require("./CreateMovie");

// Inicializar el formulario
initializeForm();

// Importar la función renderCards del archivo renderCards.js
const renderCards = require("./renderCards");
const axios = require("axios");

// Realizar una solicitud GET a la URL proporcionada, que es la API de películas.
axios
  .get("http://localhost:3000/movies")
  .then((response) => {
    // Al recibir una respuesta exitosa, extraer los datos de la respuesta
    const data = response.data;
    // Llamar a la función renderCards para renderizar las tarjetas con los datos obtenidos
    renderCards(data);
  })
  .catch((error) => {
    // En caso de error al obtener los datos, imprimir un mensaje de error en la consola
    console.error("Error al obtener los datos:", error);
  });
