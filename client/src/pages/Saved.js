import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";

class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <div>
        <Jumbotron />
        <br />
        <div className="container border border-warning">
          <h1>Saved Books</h1>
          <BookList />
        </div>
      </div>
    );
  }
}

export default Saved;
