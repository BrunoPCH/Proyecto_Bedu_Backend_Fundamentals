const { Sequelize } = require("sequelize");

// DB conection
const sequelize = new Sequelize({
  // Sqlite conection
  dialect: "sqlite",
  // file localization
  storage: "./deptos2.db",
});

exports.sequelize = sequelize;
// Probando conexion a BD con Sqlite3
exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("> Conectado a la base de datos :D");
  } catch (e) {
    console.error("> No se pudo conectar con la base de datos :(");
    console.error(e);
  }
};
// UPDATING BD
exports.sync = async function () {
  try {
    await sequelize.sync({ force: true });
    console.log("> Base de datos actualizada!");
  } catch (e) {
    console.error("> No se puede actualizar la base de datos");
    console.error(e);
  }
};
