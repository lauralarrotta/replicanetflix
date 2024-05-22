// Función para generar las estrellas de calificación
function generateStars(rate) {
  const starsContainer = $("<div>").addClass("stars-container");

  for (let i = 1; i <= 5; i++) {
    const star = $("<span>").addClass("star").html("&#9733;"); // código de tu ícono de estrella
    if (i <= rate) {
      star.addClass("filled"); // Agrega la clase "filled" para estrellas rellenas según la calificación
    }
    star.click(function () {
      $(this).toggleClass("filled"); // Cambia el estado de la estrella al hacer clic
    });
    starsContainer.append(star);
  }

  return starsContainer;
}

module.exports = generateStars;
