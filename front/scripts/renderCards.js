const generateStars = require("./estrellas");

// Función para renderizar las tarjetas de películas
function renderCards(data) {
  const cardDeck = $("#tarjetas");
  cardDeck.empty();

  data.forEach(function (pelicula) {
    const card = $("<div>").addClass("card");
    const cardImg = $("<img>")
      .attr("src", pelicula.poster)
      .addClass("card-img-top");
    const cardBody = $("<div>").addClass("card-body");
    const cardTitle = $("<h5>").addClass("card-title").text(pelicula.title);
    const cardText = $("<p>").addClass("card-text").html(`
      <strong>Año:</strong> ${pelicula.year}<br>
      <strong>Director:</strong> ${pelicula.director}<br>
      <strong>Duración:</strong> ${pelicula.duration}<br>
      <strong>Género:</strong> ${pelicula.genre.join(", ")}<br>
      <strong>Rate:</strong> ${pelicula.rate}<br>
    `);
    const stars = generateStars(pelicula.rate);

    cardBody.append(cardTitle, cardText, stars); // Inserta las estrellas en el cuerpo de la tarjeta
    card.append(cardImg, cardBody);
    cardDeck.append(card);
  });
}
module.exports = renderCards;
