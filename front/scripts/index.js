const renderCards = require("./renderCards");
const axios = require("axios");

//Solicitud GET a la URL proporcionada, que es la API de películas.
axios
  .get("http://localhost:3000/movies")
  .then((response) => {
    const data = response.data;
    renderCards(data);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
