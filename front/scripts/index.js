const renderCards = require("./renderCards");

const axios = require("axios");

// // Utiliza jQuery para hacer la solicitud AJAX y manipular el DOM
// $.get("https://students-api.up.railway.app/movies", function (data, status) {
//   renderCards(data);
// });

//Solicitud GET a la URL proporcionada, que es la API de películas.
axios
  .get("https://students-api.up.railway.app/movies")
  .then((response) => {
    const data = response.data;
    renderCards(data);
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
