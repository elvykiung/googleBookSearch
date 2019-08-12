const router = require("express").Router();
// const db = require("../../models/book");
const booksController = require("../../controllers/booksController");

router
  .route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/books/:id").delete(booksController.remove);

module.exports = router;
