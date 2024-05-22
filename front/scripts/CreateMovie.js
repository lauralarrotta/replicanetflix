// Importar axios para realizar solicitudes HTTP
const axios = require("axios");

// Función para limpiar los inputs del formulario
function limpiarInputs() {
  // Obtener y limpiar los valores de los inputs por su ID
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("Director").value = "";
  document.getElementById("Duration").value = "";
  document.getElementById("Genre").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("url").value = "";
}

// Función para inicializar el formulario
function initializeForm() {
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", () => {
    // Obtener el formulario por su ID
    const form = document.getElementById("form");

    // Agregar un evento de escucha para el evento submit del formulario
    form.addEventListener("submit", async (event) => {
      // Evitar que el formulario se envíe por defecto
      event.preventDefault();

      // Crear un objeto con los datos del formulario obtenidos por su ID y limpiar espacios en blanco
      const requestData = {
        title: document.getElementById("title").value.trim(),
        year: document.getElementById("year").value.trim(),
        director: document.getElementById("Director").value.trim(),
        duration: document.getElementById("Duration").value.trim(),
        genre: document.getElementById("Genre").value.trim(),
        rate: document.getElementById("rate").value.trim(),
        poster: document.getElementById("url").value.trim(),
      };

      // Verificar si todos los campos del formulario están completos
      if (
        !requestData.title ||
        !requestData.year ||
        !requestData.director ||
        !requestData.duration ||
        !requestData.genre ||
        !requestData.rate ||
        !requestData.poster
      ) {
        // Mostrar una alerta si algún campo está vacío y detener la ejecución
        alert("Por favor completa todos los campos.");
        return;
      }

      try {
        // Enviar una solicitud POST con axios a la URL proporcionada con los datos del formulario
        const response = await axios.post(
          "http://localhost:3000/movies",
          requestData
        );
        // Mostrar una alerta de éxito y limpiar los inputs del formulario
        alert("Datos enviados correctamente", response.data);
        limpiarInputs();
      } catch (error) {
        // Capturar y manejar errores en caso de fallo al enviar la solicitud POST
        console.error("Error al agregar película:", error);
        alert(
          "Hubo un error al agregar la película. Por favor, inténtalo de nuevo."
        );
      }
    });
  });
}

// Exportar las funciones para que estén disponibles para su uso en otros archivos
module.exports = {
  limpiarInputs,
  initializeForm,
};
