const axios = require("axios");

// Función para limpiar los inputs
function limpiarInputs() {
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
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Crear un objeto con los datos del formulario
      const requestData = {
        title: document.getElementById("title").value.trim(),
        year: document.getElementById("year").value.trim(),
        director: document.getElementById("Director").value.trim(),
        duration: document.getElementById("Duration").value.trim(),
        genre: document.getElementById("Genre").value.trim(),
        rate: document.getElementById("rate").value.trim(),
        poster: document.getElementById("url").value.trim(),
      };

      // Verificar si todos los campos están completos
      if (
        !requestData.title ||
        !requestData.year ||
        !requestData.director ||
        !requestData.duration ||
        !requestData.genre ||
        !requestData.rate ||
        !requestData.poster
      ) {
        alert("Por favor completa todos los campos.");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:3000/movies",
          requestData
        );
        alert("Datos enviados correctamente", response.data);
        limpiarInputs(); // Limpiar los inputs después de enviar los datos
      } catch (error) {
        console.error("Error al agregar película:", error);
        alert(
          "Hubo un error al agregar la película. Por favor, inténtalo de nuevo."
        );
      }
    });
  });
}

// Exportar las funciones
module.exports = {
  limpiarInputs,
  initializeForm,
};
