// Importar la función generateStars del archivo "estrellas"
const generateStars = require("./estrellas");

// Función para renderizar las tarjetas de películas
function renderCards(data) {
  // Seleccionar el contenedor de las tarjetas y vaciar su contenido
  const cardDeck = $("#tarjetas");
  cardDeck.empty();

  // Iterar sobre cada película en los datos
  data.forEach(function (pelicula) {
    // Crear un elemento div con la clase "card" para la tarjeta
    const card = $("<div>").addClass("card");

    // Crear un elemento img para la imagen de la tarjeta y establecer su atributo src
    const cardImg = $("<img>")
      .attr("src", pelicula.poster)
      .addClass("card-img-top");

    // Crear un elemento div para el cuerpo de la tarjeta con la clase "card-body"
    const cardBody = $("<div>").addClass("card-body");

    // Crear un elemento h5 para el título de la tarjeta con la clase "card-title"
    const cardTitle = $("<h5>").addClass("card-title").text(pelicula.title);

    // Crear un elemento p para el texto de la tarjeta con la clase "card-text"
    const cardText = $("<p>").addClass("card-text").html(`
      <strong>Año:</strong> ${pelicula.year}<br>
      <strong>Director:</strong> ${pelicula.director}<br>
      <strong>Duración:</strong> ${pelicula.duration}<br>
      <strong>Género:</strong> ${pelicula.genre.join(", ")}<br>
      <strong>Rate:</strong> ${pelicula.rate}<br>
    `);

    // Generar las estrellas de calificación usando la función generateStars
    const stars = generateStars(pelicula.rate);

    // Agregar el título, texto y estrellas al cuerpo de la tarjeta
    cardBody.append(cardTitle, cardText, stars);

    // Agregar la imagen y el cuerpo de la tarjeta a la tarjeta
    card.append(cardImg, cardBody);

    // Agregar la tarjeta al contenedor de tarjetas
    cardDeck.append(card);
  });
}

// Exportar la función renderCards para que pueda ser utilizada en otros archivos
module.exports = renderCards;
