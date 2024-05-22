// Función para generar las estrellas de calificación
function generateStars(rate) {
  // Crea un contenedor div para las estrellas y le agrega la clase "stars-container"
  const starsContainer = $("<div>").addClass("stars-container");

  // Itera desde 1 hasta 10 para crear las estrellas
  for (let i = 1; i <= 10; i++) {
    // Crea un span para cada estrella y le agrega la clase "star", luego establece el HTML como el código del ícono de estrella
    const star = $("<span>").addClass("star").html("&#9733;"); // código de tu ícono de estrella

    // Si el número de estrellas creadas es menor o igual a la calificación, agrega la clase "filled" para representar estrellas rellenas
    if (i <= rate) {
      star.addClass("filled"); // Agrega la clase "filled" para estrellas rellenas según la calificación
    }

    // Agrega un evento de clic a cada estrella para cambiar su estado al hacer clic
    star.click(function () {
      $(this).toggleClass("filled"); // Cambia el estado de la estrella al hacer clic
    });

    // Agrega la estrella al contenedor de estrellas
    starsContainer.append(star);
  }

  // Devuelve el contenedor de estrellas con todas las estrellas generadas
  return starsContainer;
}

// Exporta la función generateStars para que esté disponible para su uso en otros archivos
module.exports = generateStars;
