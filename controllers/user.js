// Importando funciones de carpeta services

const {
  findAll,
  findById,
  insert,
  deleteById,
  update,
} = require("../services/user");

exports.getUsers = async function (request, response) {
  const users = await findAll();
  response.status(200).json(users);
};

exports.getUser = async function (request, response) {
  const { id } = request.params;
  const user = await findById(id);
  response.status(200).json(user);
};

exports.createUser = async function (request, response) {
  const { email, username, password } = request.body;
  const user = await insert({ email, username, password, userId: 1 });
  response.status(201).json(user);
};

exports.updateUser = async function (request, response) {
  const { email, username, password } = request.body;
  const { id } = request.params;

  await update(id, { email, username, password });
  response.status(204).end();
};

exports.deleteUser = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};
