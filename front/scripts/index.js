// Utiliza jQuery para hacer la solicitud AJAX y manipular el DOM
$.get("https://students-api.up.railway.app/movies", (data) => {
  Rendercards(data); // Llama a la función Rendercards con los datos obtenidos
});

// Agrega un evento de escucha al campo de búsqueda
$("#buscador").on("input", function () {
  const searchTerm = $(this).val().toLowerCase();
  filterCards(searchTerm);
});

const Rendercards = (data) => {
  class Tarjeta {
    constructor(pelicula) {
      this.pelicula = pelicula;
    }
    generarTarjeta() {
      // Crea la estructura de la tarjeta utilizando Bootstrap
      const card = $("<div>").addClass("card");
      const cardImg = $("<img>")
        .attr("src", this.pelicula.poster)
        .addClass("first-content");

      const cardBody = $("<div>").addClass("card-body");
      const cardTitle = $("<h5>")
        .addClass("card-title")
        .text(this.pelicula.title);

      // Añade todos los datos de la película a la tarjeta
      const cardText = $("<p>").addClass("second-content").html(`
          <strong>Año:</strong> ${this.pelicula.year}<br>
          <strong>Director:</strong> ${this.pelicula.director}<br>
          <strong>Duración:</strong> ${this.pelicula.duration}<br>
          <strong>Género:</strong> ${this.pelicula.genre.join(", ")}<br>
          <strong>Rate:</strong> ${this.generarEstrellas(
            this.pelicula.rate
          )}<br>
        `);

      cardBody.append(cardTitle, cardText);
      card.append(cardImg, cardBody);

      return card;
    }

    // Función para generar las estrellas según la clasificación
    generarEstrellas(rate) {
      const estrellas = [];
      const maxEstrellas = 5;
      const rating = Math.round(rate * 2) / 2; // Redondea al medio punto más cercano

      for (let i = 1; i <= maxEstrellas; i++) {
        if (i <= rating) {
          estrellas.push('<i class="fas fa-star"></i>'); // Estrella completa
        } else if (i - rating <= 0.5) {
          estrellas.push('<i class="fas fa-star-half-alt"></i>'); // Media estrella
        } else {
          estrellas.push('<i class="far fa-star"></i>'); // Estrella vacía
        }
      }

      return estrellas.join(""); // Devuelve las estrellas como un string
    }
  }

  // Función para filtrar las tarjetas según el término de búsqueda
  const filterCards = (searchTerm) => {
    $(".card").each(function () {
      const cardTitle = $(this).find(".card-title").text().toLowerCase();
      if (cardTitle.includes(searchTerm)) {
        $(this).show(); // Muestra la tarjeta si coincide con el término de búsqueda
      } else {
        $(this).hide(); // Oculta la tarjeta si no coincide con el término de búsqueda
      }
    });
  };

  // Genera las tarjetas y añádelas al contenedor en el DOM
  const cardDeck = $("#contenedor-tarjetas");
  cardDeck.empty();

  data.forEach((pelicula) => {
    const tarjeta = new Tarjeta(pelicula);
    const tarjetaHTML = tarjeta.generarTarjeta();
    tarjetaHTML.addClass("ml-auto"); // Alinea la tarjeta a la derecha
    cardDeck.append(tarjetaHTML); // Agrega la tarjeta al contenedor
  });
};
