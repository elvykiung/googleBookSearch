import axios from "axios";

export default {
  getSavedBook: function() {
    return axios.get("/api/books");
  },

  getSearchBook: function(query) {
    return axios.get("/api/books/" + query);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
