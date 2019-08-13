import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <a href={props.bookLink} type="button" className="btn btn-success mx-2">
      View
    </a>
  );
}

export default ViewBtn;
