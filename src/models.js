const { sequelize, DataTypes, Model } = require("./db");


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


class JournalEntry extends Model {}

JournalEntry.init(
  {
    entry: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  },
  {
    sequelize,
    timestamps: false,
  }
);

User.hasMany(JournalEntry);
JournalEntry.belongsTo(User);



module.exports = {User, JournalEntry}



