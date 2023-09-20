//import Datatypes
const { DataTypes } = require("sequelize");
// Import sequelize
const { sequelize } = require("./sequelize");

// CREATE TABLE Apartment (
//   apartment INTEGER PRIMARY KEY,
//   Tower VARCHAR(10) NOT null,
//   Owner VARCHAR(100) NOT null,
//   Have debt NOT NULL DEFAULT no
// In rent NOT NULL DEFAULT no
//   )

// DB MODEL
module.exports = sequelize.define("apartments", {
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
