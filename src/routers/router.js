const express = require("express");

const router = express.Router();

const { register, login, checkAuth } = require("../controllers/auth");

const {
  readUser,
  deleteUser,
  detailUser,
  editUser,
} = require("../controllers/user");

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

const {
  readDetailBookmarksUser,
  deleteBookmarks,
  readBookmarks,
  readOneBookmark,
  createBookmarks,
} = require("../controllers/bookmark");

const { auth } = require("../middlewares/middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth, checkAuth);

router.get("/users", readUser);
router.get("/user/:id", detailUser);
router.patch("/user/:id", auth, editUser);
router.delete("/user/:id", auth, deleteUser);

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

router.get("/bookmark/:id", readDetailBookmarksUser);
router.get("/bookmarks", readBookmarks);
router.get("/bookmark/:userId/:bookId", readOneBookmark);
router.post("/bookmark", auth, createBookmarks);
router.delete("/bookmark/:userId/:bookId", auth, deleteBookmarks);

module.exports = router;
