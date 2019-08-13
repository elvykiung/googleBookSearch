import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=title:";
const FIELD = "&fields=kind,items(volumeInfo)&key=";
const APIKEY = process.env.API_KEY || "AIzaSyDVpMSvMPyC4uHt3FvBQPzc6V5fF7jBpn8";

export default {
  getSavedBook: function(query) {
    return axios.get("/api/books");
  },

  getSearchBook: function(query) {
    return axios.get(BASEURL + query + FIELD + APIKEY);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
