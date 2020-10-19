"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Book, {
        as: "books",
      });

      User.belongsToMany(models.Book, {
        as: "bookmarkedBooks",
        through: {
          model: "Bookmarks",
          as: "bookmark",
        },
      });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      thumb: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
