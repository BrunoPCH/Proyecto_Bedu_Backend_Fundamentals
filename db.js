// Importing functions connect & sync of sequelize.js file
const { connect, sync } = require("./models/sequelize");

// Import model of BD of USERs
const User = require("./models/user");
const Apartment = require("./models/apartments");

// RELACIONES ENTRE TABLAS
// "Un usuario tiene muchos deptos"
// En la tabla "apartments" se va agregar una llave
// foránea de la tabla "users"
User.hasMany(Apartment);
Apartment.belongsTo(User);

//Relacion muchos a muchos
//Muchos usuarios pueden estar asignados a muchos depas
User.belongsToMany(Apartment, { through: "User_apartments" });
Apartment.belongsToMany(User, { through: "User_apartments" });

//Exporta BD y ESPERA FUNCIONES ASINCRONAS CONNECT y SYNC que estan en sequelize.js
exports.initDatabase = async function () {
  await connect();
  await sync();
};
