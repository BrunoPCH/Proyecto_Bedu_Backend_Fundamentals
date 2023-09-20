// Intalling express
const express = require("express");
const app = express();

//Declaring EXPRESS
app.use(express.json());

// INSTALLING dot.env
require("dotenv").config();

// Importing DB
const { initDatabase } = require("./db");
// inicializando la BD
initDatabase();

// Routers
const createUserAdminRouter = require("./routers/createAdminUser.js");
const createUserRouter = require("./routers/createUser.js");

//Declaration of Routers
app.use(createUserAdminRouter);
app.use(createUserRouter);

// Open port with .env varieble
app.listen(process.env.SERVER_PORT, function () {
  console.log(">>> Escuchando puerto " + process.env.SERVER_PORT + " <;-D");
});
