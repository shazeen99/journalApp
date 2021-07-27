const { sequelize, DataTypes, Model } = require("./db");
const journalEntry = require ("./entry")

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

User.hasMany(journalEntry);

module.exports = User;



