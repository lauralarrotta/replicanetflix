const renderCards = require("./renderCards");

// Utiliza jQuery para hacer la solicitud AJAX y manipular el DOM
$.get("https://students-api.up.railway.app/movies", function (data, status) {
  renderCards(data);
});
