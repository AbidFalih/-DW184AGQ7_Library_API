const express = require("express");

const router = express.Router();

const { register, login, checkAuth } = require("../controllers/auth");

const { readUser, deleteUser } = require("../controllers/user");

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

const { auth } = require("../middlewares/middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth, checkAuth);

router.get("/users", readUser);
router.delete("/user/:id", deleteUser);

router.get("/categories", readCategory);
router.get("/category/:id", detailCategory);
router.post("/category", auth, createCategory);
router.patch("/category/:id", auth, updateCategory);
router.delete("/category/:id", auth, deleteCategory);

router.get("/books", readBook);
router.get("/book/:id", detailBook);
router.post("/book", auth, createBook);
router.patch("/book/:id", auth, updateBook);
router.delete("/book/:id", auth, deleteBook);

module.exports = router;
