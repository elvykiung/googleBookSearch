const db = require("../models/book");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=title:";
const FIELD = "&fields=kind,items(volumeInfo)&key=";
const API_KEY = process.env.API_KEY;

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
  },

  searchBook: function(req, res) {
    axios.get(BASEURL + req.params.id + FIELD + API_KEY).then(dbModel => res.json(dbModel.data));
  }
};
