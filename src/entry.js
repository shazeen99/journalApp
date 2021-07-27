const { sequelize, DataTypes, Model } = require("./db");
const User = require ("./user")

class journalEntry extends Model {}

journalEntry.init(
  {
    entry: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  },
  {
    sequelize,
    timestamps: false,
  }
);

journalEntry.belongto(User);

module.exports = journalEntry;
