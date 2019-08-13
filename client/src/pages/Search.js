import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import API from "../utils/API";

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    booksResult: [],
    bookSearch: ""
    // author: "",
    // description: "",
    // image: "",
    // link: "",
    // title: ""

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchBook = query => {
    API.getSearchBook(query)
      .then(res => this.setState({ booksResult: res.data.items }))
      // .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.bookSearch);
    console.log(this.state.bookSearch);
  };

  handleSaveBook = (data) => {
    // event.preventDefault();
   console.log(data)
    // this.setState({
    //   author: event.target.value,
    //   description: event.target.value,
    //   image: event.target.value,
    //   link: event.target.value,
    //   title: event.target.value,
    // });

    API.saveBook({
      author: data.volumeInfo.title,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.smallThumbnail,
      link: data.volumeInfo.previewLink,
      title: data.volumeInfo.title,
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchBar search={this.state.search} handleSearchSubmit={this.handleSearchSubmit} handleInputChange={this.handleInputChange} />
        <br />
        <div className="container border border-warning">
          <h1>Results</h1>
          <div className="container pl-5 pb-3">
            <div className="row">
              {this.state.booksResult.map(books => {
                return <BookList key={books.volumeInfo.title} title={books.volumeInfo.title} author={books.volumeInfo.authors} image={books.volumeInfo.imageLinks.smallThumbnail} description={books.volumeInfo.description} bookLink={books.volumeInfo.previewLink} handleSaveBook={()=>this.handleSaveBook(books)}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
