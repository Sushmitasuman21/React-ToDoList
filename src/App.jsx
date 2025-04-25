import React, { useState } from "react";
import "./global.css";
import CourseForm from "./CourseForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import GroceryList from "./task/GroceryList";

const App = () => {
  let [state, setState] = useState({
    course: "",
    trainer: "",
    items: [], //to store multiple course & trainer's data together
    id: uuidv4(), //to  generate unique id
  });

  let { course, trainer, items, id } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      //keyname: value coming from state
      course: course,
      trainer: trainer,
      id: id,
    };

    setState({
      items: [...items, newItem],
      id: uuidv4(),
      course: "",
      trainer: "",
    });
  };

  //Delete Functionality
  let handleDelete = (x) => {
    let filteredItems = items.filter((value) => value.id !== x);
    console.log(filteredItems);

    setState({ ...state, items: filteredItems });
  };

  //update functionality
  let handleUpdate = (y) => {
    //! restItems (Data which should not be updated)
    let restItems = items.filter((value) => value.id !== y);
    console.log("rest items", restItems);

    //! updateItems (Data which is to be updated)
    let updateItems = items.find((value) => value.id == y);
    console.log("update items", updateItems);

    setState({
      items: restItems,
      course: updateItems.course,
      trainer: updateItems.trainer,
      id: updateItems.id,
    });
  };

  return (
    <article>
      <h1>ToDoList</h1>
      <main>
        <CourseForm
          course={course}
          trainer={trainer}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TodoList
          items={items}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    </article>
    // <GroceryList/>
  );
};

export default App;

// npm i uuid
// 'react developer tool' on browser install
// css palettes
