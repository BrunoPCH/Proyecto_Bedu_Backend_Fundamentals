const express = require("express");
const router = express.Router();
//Creating AdminUser
router.get("/createAdminUser", function (request, response) {
  response.send(">>> Aqui se crea usuario Administrador");
});

module.exports = router;
