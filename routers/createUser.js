const express = require("express");
const router = express.Router();

//Creating common user
router.get("/createUser", function (request, response) {
  response.send(">>> Aqui se crea usuario");
});

module.exports = router;
