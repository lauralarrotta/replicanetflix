$.get("https://students-api.up.railway.app/movies", (data) => {
  Rendercards(data); // Llama a la función Rendercards con los datos obtenidos
});

const Rendercards = (data) => {
  class Tarjeta {
    constructor(pelicula) {
      this.pelicula = pelicula;
    }
    generarTarjeta() {
      // Crea la estructura de la tarjeta
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      const myCard = document.createElement("div");
      myCard.classList.add("myCard");

      const innerCard = document.createElement("div");
      innerCard.classList.add("innerCard");

      const frontSide = document.createElement("div");
      frontSide.classList.add("frontSide");

      const frontImg = document.createElement("img");
      frontImg.src = this.pelicula.poster;
      frontImg.alt = this.pelicula.title;
      frontImg.classList.add("front-img");

      frontSide.appendChild(frontImg);

      const backSide = document.createElement("div");
      backSide.classList.add("backSide");

      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = this.pelicula.title;

      const year = document.createElement("p");
      year.textContent = `Año: ${this.pelicula.year}`;

      const director = document.createElement("p");
      director.textContent = `Director: ${this.pelicula.director}`;

      const duration = document.createElement("p");
      duration.textContent = `Duración: ${this.pelicula.duration}`;

      const genre = document.createElement("p");
      genre.textContent = `Género: ${this.pelicula.genre.join(", ")}`;

      const rate = document.createElement("p");
      rate.textContent = `Calificación: ${this.pelicula.rate}`;

      backSide.appendChild(title);
      backSide.appendChild(year);
      backSide.appendChild(director);
      backSide.appendChild(duration);
      backSide.appendChild(genre);
      backSide.appendChild(rate);

      innerCard.appendChild(frontSide);
      innerCard.appendChild(backSide);

      myCard.appendChild(innerCard);
      cardContainer.appendChild(myCard);

      return cardContainer;
    }
  }

  // Genera las tarjetas y añádelas al contenedor en el DOM
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
  contenedorTarjetas.innerHTML = ""; // Limpia el contenido actual del contenedor

  data.forEach((pelicula) => {
    const tarjeta = new Tarjeta(pelicula);
    const tarjetaHTML = tarjeta.generarTarjeta();
    contenedorTarjetas.appendChild(tarjetaHTML); // Agrega la tarjeta al contenedor
  });
};
