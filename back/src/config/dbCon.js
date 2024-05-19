require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  //conexion con la base de datos
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbCon;
