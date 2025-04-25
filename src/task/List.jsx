import React from "react";

const List = (props) => {
  let { data } = props;

  let { items, price, id } = data;

  //Task : Give css for each card(background)
  //for ex

  return (
    <div>
      <h2>{items}</h2>
      <h3>Rs. {price}</h3>
    </div>
  );
};

export default List;
