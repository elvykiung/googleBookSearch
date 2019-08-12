import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/SearchBar";
import BookList from "../components/BookList";

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container border border-warning pb-5">
          <h1>Book Search</h1>
          <p>Book</p>
          <form>
            <Input name="book" placeholder="Book Title (required)" />
            <FormBtn>Search Book</FormBtn>
          </form>
        </div>
        <br />
        <div className="container border border-warning">
          <h1>Results</h1>
          <BookList />
        </div>
      </div>
    );
  }
}

export default Search;
