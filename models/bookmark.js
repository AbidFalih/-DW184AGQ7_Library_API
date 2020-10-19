"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Bookmark.belongsTo(models.User, {
      //   as: "user",
      //   foreignKey: {
      //     id: "userId",
      //   },
      // });
      // Bookmark.belongsTo(models.Book, {
      //   as: "book",
      //   foreignKey: {
      //     id: "bookId",
      //   },
      // });
    }
  }
  Bookmark.init(
    {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bookmark",
    }
  );
  return Bookmark;
};
