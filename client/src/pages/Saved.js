import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    API.getSavedBook()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }
  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <div>
        <Jumbotron />
        <br />
        <div className="container border border-warning">
          <h1>Saved Books</h1>
          {this.state.books.map(books => {
            return <BookList key={books.title} title={books.title} author={books.author} image={books.image} description={books.description} />;
          })}
        </div>
      </div>
    );
  }
}

export default Saved;
