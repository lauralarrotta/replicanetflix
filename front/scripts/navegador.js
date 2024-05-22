// Ejecutar el código cuando el documento esté completamente cargado
$(document).ready(function () {
  // Ejecutar la función cuando se detecte un evento de desplazamiento en la ventana
  $(window).scroll(function () {
    // Obtener la cantidad de desplazamiento vertical en píxeles
    var scroll = $(window).scrollTop();

    // Verificar si el desplazamiento es mayor que 100 píxeles
    if (scroll > 100) {
      // Cambiar el fondo de la barra de navegación a un color oscuro
      $(".netflix-navbar").css("background", "#0C0C0C");
    } else {
      // Restablecer el fondo de la barra de navegación a transparente
      $(".netflix-navbar").css("background", "transparent");
    }
  });
});
