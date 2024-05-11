module.exports = {
  //por donde queremos que el webpack entre
  entry: "./scripts/index.js",

  // Guardar el resultado final
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
};

// se debe ir al packjson
