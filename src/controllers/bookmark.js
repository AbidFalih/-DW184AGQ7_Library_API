const { showError } = require("./_showError");
const { Bookmark, User, Book } = require("../../models");

// exports.readBookmark = async (req, res) => {
//   try {
//     const bookmarks = await Bookmark.findAll({
//       include: [
//         {
//           model: User,
//           as: "user",
//           attributes: ["id"],
//         },
//         {
//           model: Book,
//           as: "book",
//           attributes: {
//             exclude: ["UserId", "CategoryId", "createdAt", "updatedAt"],
//           },
//         },
//       ],
//       attributes: {
//         exclude: [
//           "userId",
//           "bookId",
//           "UserId",
//           "BookId",
//           "createdAt",
//           "updatedAt",
//         ],
//       },
//     });

//     res.send({
//       message: "Successfully get bookmarks data",
//       bookmarks,
//     });
//   } catch (err) {
//     showError(err);
//   }
// };

exports.readDetailBookmarksUser = async (req, res) => {
  try {
    const { id } = req.params;
    const bookmarksUser = await User.findOne({
      where: { id },
      include: {
        model: Book,
        as: "bookmarkedBooks",
        through: {
          model: Bookmark,
          as: "bookmark",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        attributes: {
          exclude: ["UserId", "CategoryId", "createdAt", "updatedAt"],
        },
        include: {
          model: User,
          as: "user",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      },
      attributes: ["id"],
    });

    res.send({
      message: "Successfully get User-Books through Bookmark",
      bookmarksUser,
    });
  } catch (err) {
    showError(err);
  }
};

exports.readBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.send({
      message: "Successfully get all bookmarks",
      bookmarks,
    });
  } catch (err) {
    showError(err);
  }
};

exports.readOneBookmark = async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    const selectedBook = await Bookmark.findOne({
      where: {
        userId,
        bookId,
      },
    });

    res.send({
      message: "Successfully search a book :D",
      selectedBook,
    });
  } catch (err) {
    showError(err);
  }
};

exports.createBookmarks = async (req, res) => {
  try {
    const bookmarksCreated = await Bookmark.create(req.body);

    res.send({
      message: "Successfully created new bookmark",
      bookmarksCreated,
    });
  } catch (err) {
    showError(err);
  }
};

exports.deleteBookmarks = async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    await Bookmark.destroy({
      where: {
        userId,
        bookId,
      },
    });

    res.send({
      message: `Successfully delete bookmark from userId ${userId} for book with id ${bookId}`,
    });
  } catch (err) {
    showError(err);
  }
};
