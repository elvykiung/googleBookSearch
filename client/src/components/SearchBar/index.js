import React from "react";

function SearchForm(props) {
  return (
    <div className="container border border-warning pb-5">
      <h1>Book Search</h1>
      <p>Book</p>
      <form>
        <div className="form-group">
          <input onChange={props.handleInputChange} value={props.search} type="text" className="form-control" placeholder="Book Title (required)" id="search" name="bookSearch" />
        </div>

        <button onClick={props.handleSearchSubmit} style={{ float: "right" }} className="btn btn-success">
          {props.children}
          Book Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
