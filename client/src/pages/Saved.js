import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import API from "../utils/API";

class Saved extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    API.getSavedBook()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  loadBooks = () => {
    API.getSavedBook()
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
  };

  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <br />
        <div className="container border border-warning">
          <h1>Saved Books</h1>
          {this.state.books.map(books => {
            return <BookList key={books._id} title={books.title} author={books.author} image={books.image} description={books.description} bookLink={books.link} handleDeleteBook={()=>this.handleDeleteBook(books._id)}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Saved;
