const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/user");

//Creating common user
// router.get("/createUser", function (request, response) {
//   // response.send(">>> Aqui se crea usuario");

// });
router.get("/createUser", createUser);

module.exports = router;
