import React, { Fragment } from "react";
import List from "./List";

const GroceryList = () => {
  let grocery = [
    {
      items: "Wheat",
      price: 400,
      id: 1,
    },
    {
      items: "Jowar",
      price: 600,
      id: 2,
    },
    {
      items: "DryFruits",
      price: 900,
      id: 3,
    },
    {
      items: "Pulses",
      price: 450,
      id: 4,
    },
    {
      items: "Sugar",
      price: 550,
      id: 5,
    },
    {
      items: "Water",
      price: 100,
      id: 6,
    },
    {
      items: "CornFlakes",
      price: 650,
      id: 7,
    },
  ];

  return (
    <>
      <h1>GROCERY SHOPPING LIST</h1>
      div
      <div className="container">
        {grocery.map((data) => {
          console.log(data);

          return (
            <Fragment key={data.id}>
              <List data={data} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default GroceryList;
