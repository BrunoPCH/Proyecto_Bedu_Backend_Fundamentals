const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

//Creating common user
// router.get("/createUser", function (request, response) {
//   // response.send(">>> Aqui se crea usuario");

// });

// METODOS HTTP

// Obtener usuarios poner atención al plural en "/users"
router.get("/users", getUsers);
// Obtener usuario por ID
router.get("/user/:id", getUser);
// Crear usuario
router.post("/user", createUser);
//Actualizar info de usuario por ID
router.put("/users/:id", updateUser);
//Eliminar Usuario por ID
router.delete("/users/:id", deleteUser);

module.exports = router;
