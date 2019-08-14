const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(booksController.searchBook)
  .delete(booksController.remove);

module.exports = router;
