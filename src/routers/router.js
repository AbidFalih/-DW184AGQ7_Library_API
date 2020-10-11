const express = require("express");

const router = express.Router();

const { readUser, createUser, deleteUser } = require("../controllers/user");

const {
  readCategory,
  detailCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

const {
  readBook,
  detailBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.get("/users", readUser);
router.post("/register", createUser);
router.delete("/user/:id", deleteUser);

router.get("/category", readCategory);
router.get("/category/:id", detailCategory);
router.post("/category", createCategory);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

router.get("/books", readBook);
router.get("/book/:id", detailBook);
router.post("/book", createBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
