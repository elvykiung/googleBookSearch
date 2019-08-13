import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=title:";
const FIELD = "&fields=kind,items(volumeInfo)";
const APIKEY = "&key=AIzaSyDVpMSvMPyC4uHt3FvBQPzc6V5fF7jBpn8";

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
  },
};
