import axios from "axios";

export default {
  getSavedBook: function(query) {
    return axios.get("/api/books");
  },

  getSearchBook: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=title:TheGrandDesign&fields=kind,items(volumeInfo)&key=AIzaSyDVpMSvMPyC4uHt3FvBQPzc6V5fF7jBpn8");
  }
};
