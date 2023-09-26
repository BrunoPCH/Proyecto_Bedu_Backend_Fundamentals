//import Datatypes
const { DataTypes } = require("sequelize");
// Import sequelize
const { sequelize } = require("./sequelize");

// MODEL OF SQL DB
// CREATE TABLE Users (
// user VARCHAR(100) NOT NULL PRIMARY KEY o UNIQUE
// password VARCHAR(20) NOT NULL >=8 AND <=20
// usertype VARCHAR(100) NOT NULL DEFAULT "Owner"

module.exports = sequelize.define("users", {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
  userType: {
    field: "user_type",
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: "Owner",
  },
});
