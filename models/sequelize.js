// INSTALLING SEQUELIZE
const { Sequelize } = require("sequelize");

const { FORCE_DB_UPDATE } = process.env;

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
    //check file .env force updating DB
    await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
    console.log("> Base de datos actualizada!");
  } catch (e) {
    console.error("> No se puede actualizar la base de datos");
    console.error(e);
  }
};
// llamando la funcion que conecta a la base de datos
//connect(); <-- se llama en db.js

// EJEMPLO de funciones para interactuar con la base de datos
// exports.connect = async function () {
// 	try {
// 		await sequelize.authenticate();
// 		console.log("> Conectado a la base de datos");
// 	} catch (e) {
// 		console.error("> No se puede conectar a la base de datos");
// 		console.error(e);
// 	}
// };

// exports.sync = async function () {
// 	try {
// 		await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
// 		console.log("> Base de datos actualizada");
// 	} catch (e) {
// 		console.error("> no se puede actualizar la base de datos");
// 		console.error(e);
// 	}
// };
