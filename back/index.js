const app = require("./src/service/server");
const dbCon = require("./src/config/dbCon");

dbCon()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
    app.listen(300, () => {
      console.log(`Servidor escuchando en el puerto 300`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });
