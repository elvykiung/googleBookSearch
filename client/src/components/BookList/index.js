import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";

export function BookList(props) {
  return (
    <div className="container pl-5 pb-3">
      <div className="row">
        <h4>The Hunger Games</h4>
        <hr />
        <ViewBtn />
        <SaveBtn />
      </div>
      <div className="row">
        <p>Suzanne Collins</p>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 text-center ">
          <img className="pr-3" style={{ width: 150, height: 150 }} src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="" />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <p>Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.</p>
        </div>
      </div>
    </div>
  );
}

export default BookList;
