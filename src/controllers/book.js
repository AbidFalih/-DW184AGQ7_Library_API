const { Book, Category, User } = require("../../models");
const { showError } = require("./_showError");

// function showRelUserCat() {
//   console.log("Yeayyy bisa dieksecuteee");
//   return {
//     include: [
//       {
//         model: User,
//         as: "user",
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       },
//       {
//         model: Category,
//         as: "category",
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       },
//     ],
//     attributes: {
//       exclude: [
//         "userId",
//         "categoryId",
//         "UserId",
//         "CategoryId",
//         "createdAt",
//         "updatedAt",
//       ],
//     },
//   };
// }

// const showRelUserCat2 = {
//   include: [
//     {
//       model: User,
//       as: "user",
//       attributes: { exclude: ["createdAt", "updatedAt"] },
//     },
//     {
//       model: Category,
//       as: "category",
//       attributes: { exclude: ["createdAt", "updatedAt"] },
//     },
//   ],
//   attributes: {
//     exclude: [
//       "userId",
//       "categoryId",
//       "UserId",
//       "CategoryId",
//       "createdAt",
//       "updatedAt",
//     ],
//   },
// };

exports.readBook = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "userId",
          "categoryId",
          "UserId",
          "CategoryId",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.send({
      message: "Successfully get all books",
      books,
    });
  } catch (err) {
    showError(err);
  }
};

exports.detailBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "userId",
          "categoryId",
          "UserId",
          "CategoryId",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.send({
      message: `Successfully get book with id ${id}`,
      book,
    });
  } catch (err) {
    showError(err);
  }
};

exports.createBook = async (req, res) => {
  try {
    const addBook = await Book.create(req.body);

    const detailBook = await Book.findOne({
      where: { id: addBook.id },
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "userId",
          "categoryId",
          "UserId",
          "CategoryId",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.send({
      message: "Successfully added a book",
      addBook: detailBook,
    });
  } catch (err) {
    showError(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.update(req.body, {
      where: { id },
    });

    const updatedBook = await Book.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "userId",
          "categoryId",
          "UserId",
          "CategoryId",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.send({
      message: `Successfully update a book with id ${id}`,
      updatedBook,
    });
  } catch (err) {
    showError(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });

    res.send({
      message: `Successfully delete book with id ${id}`,
      bookId: id,
    });
  } catch (err) {
    showError(err);
  }
};
