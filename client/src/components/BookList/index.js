import React from "react";


export function BookList(props) {
  return (
    <div className="container pl-5 pb-3">
      
      <div className="row">
        <h4>{props.title}</h4>
        <hr />
        <a href={props.bookLink} type="button" className="btn btn-success mx-2">View</a>
       
       { window.location.pathname === "/search" || window.location.pathname === "/" ? <button type="button" className="btn btn-success" onClick={props.handleSaveBook}>Save</button> :
        <button type="button" className="btn btn-success" onClick={props.handleDeleteBook}>Delete</button>}
      
      </div>
      
      <div className="row">
        <p>{props.author}</p>
      </div>
      
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 text-center ">
          <img className="pr-3" style={{ width: 150, height: 150 }} src={props.image} alt={""} />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <p>{props.description}</p>
        </div>
      </div>

    </div>
  );
}

export default BookList;
