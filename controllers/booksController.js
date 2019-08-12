const db = require("../models/book");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const author = req.body.author;
    const description = req.body.description;
    const image = req.body.image;
    const link = req.body.link;
    const title = req.body.title;

    const newBook = new db({
      author,
      description,
      image,
      link,
      title
    });

    newBook
      .save()
      .then(() => res.json("Book added!"))
      .catch(err => res.status(400).json("Error: " + err));
  },
  remove: function(req, res) {
    db.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
