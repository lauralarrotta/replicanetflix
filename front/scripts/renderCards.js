// Función para renderizar las tarjetas de películas
function renderCards(data) {
  const cardDeck = $("#contenedor-tarjetas");
  cardDeck.empty();

  data.forEach(function (pelicula) {
    const card = $("<div>").addClass("card");
    const cardImg = $("<img>")
      .attr("src", pelicula.poster)
      .addClass("first-content");
    const cardBody = $("<div>").addClass("card-body");
    const cardTitle = $("<h5>").addClass("card-title").text(pelicula.title);
    const cardText = $("<p>").addClass("second-content").html(`
      <strong>Año:</strong> ${pelicula.year}<br>
      <strong>Director:</strong> ${pelicula.director}<br>
      <strong>Duración:</strong> ${pelicula.duration}<br>
      <strong>Género:</strong> ${pelicula.genre.join(", ")}<br>
      <strong>Rate:</strong> ${generateStars(pelicula.rate)}<br>
    `);

    cardBody.append(cardTitle, cardText);
    card.append(cardImg, cardBody);
    cardDeck.append(card);
  });

  $("#buscador").on("input", function () {
    const searchTerm = $(this).val().toLowerCase();
    $(".card").each(function () {
      const cardTitle = $(this).find(".card-title").text().toLowerCase();
      $(this).toggle(cardTitle.includes(searchTerm));
    });
  });

  function generateStars(rate) {
    let stars = "";
    const maxStars = 5;
    const rating = Math.round(rate * 2) / 2;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars += '<i class="fas fa-star"></i>';
      } else if (i - rating <= 0.5) {
        stars += '<i class="fas fa-star-half-alt"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }

    return stars;
  }
}

module.exports = renderCards;
