// Función para renderizar las tarjetas de películas
function renderCards(data) {
  const cardDeck = $("#contenedor-tarjetas");
  cardDeck.empty();

  data.forEach(function (pelicula, index) {
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
      <strong>Rate:</strong> ${generateStars(pelicula.rate, index)}<br>
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

  // Función para generar las estrellas según la calificación y el índice de la tarjeta
  function generateStars(rate, index) {
    let stars = "";
    const maxStars = 5;
    const rating = Math.round(rate * 2) / 2;

    for (let i = 1; i <= maxStars; i++) {
      const star = $("<i>")
        .addClass("star fas fa-star")
        .attr("data-index", index);
      if (i <= rating) {
        star.addClass("filled");
      }
      stars += star[0].outerHTML;
    }

    return `<div class="star-container">${stars}</div>`;
  }

  // Evento de clic para las estrellas
  $(document).on("click", ".star", function () {
    const index = $(this).attr("data-index");
    const card = $(".card").eq(index);
    const stars = card.find(".star");
    const clickedStarIndex = stars.index(this);

    stars.removeClass("filled");
    stars.slice(0, clickedStarIndex + 1).addClass("filled");
  });
}

module.exports = renderCards;
