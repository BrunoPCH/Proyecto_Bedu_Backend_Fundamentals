const express = require("express");
const router = express.Router();
//Creating AdminUser
router.post("/createAdminUser", function (request, response) {
  response.send(">>> Aqui se crea usuario Administrador");
});

module.exports = router;
