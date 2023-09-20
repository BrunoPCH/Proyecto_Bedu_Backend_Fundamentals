require("dotenv").config();

// Intalling express
const express = require("express");
const app = express();

app.use(express.json());

//Importing DB
const { initDatabase } = require("./db");
initDatabase();

// Define and install sequelize
const { Sequelize, INTEGER, DataTypes } = require("sequelize");

// Routers
const createUserAdminRouter = require("./routers/createAdminUser.js");
const createUserRouter = require("./routers/createUser.js");
const { LIMIT_LENGTH } = require("sqlite3");

//Declaration of Routers
app.use(createUserAdminRouter);
app.use(createUserRouter);

// DB conection
const sequelize = new Sequelize({
  // Sqlite conection
  dialect: "sqlite",
  // file localization
  storage: "./deptos.db",
});

// Probando conexion a BD con Sqlite3
async function connect() {
  try {
    await sequelize.authenticate();
    console.log("> Conectado a la base de datos :D");
  } catch (e) {
    console.error("> No se pudo conectar con la base de datos :(");
    console.error(e);
  }
}
// llamando la funcion que conecta a la base de datos
connect();

// CREATE TABLE Apartment (
//   apartment INTEGER PRIMARY KEY,
//   Tower VARCHAR(10) NOT null,
//   Owner VARCHAR(100) NOT null,
//   Have debt NOT NULL DEFAULT no
//   )
// DB MODEL
const Apartment = sequelize.define("apartments", {
  apartment: {
    type: DataTypes.INTEGER(),
    allowNull: false,
    defaultValue: 1,
  },
  tower: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  hasDebt: {
    field: "has_debt",
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  inRent: {
    field: "is_arrended",
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

// En la tabla "apartments" se va agregar una llave
// foránea de la tabla "users"
User.hasMany(Apartment);
Apartment.belongsTo(User);

//RElacion muchos a muchos
//Muchos usuarios pueden estar asignados a muchos depas
User.belongToMany(Apartment, { trough: "nose" });
Apartment.belongToMany(User, { trough: "nose" });

// UPDATING BD
async function sync() {
  try {
    await sequelize.sync({ force: true });
    console.log("> Base de datos actualizada!");
  } catch (e) {
    console.error("> No se puede actualizar la base de datos");
    console.error(e);
  }
}

sync();

// Open port with .env varieble
app.listen(process.env.SERVER_PORT, function () {
  console.log(">>> Escuchando puerto " + process.env.SERVER_PORT + " <;-D");
});
