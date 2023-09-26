const userService = require("../services/user");

exports.createUser = async function (request, response) {
  const { email, username, password } = request.body;
  const user = await userService.createUser({ email, username, password });
  response.json(user);
};
