import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const NewTodo = (props) => {
  const [todo, setTodo] = useState();
  const handleChange = (e) => {
    setTodo((oldData) => {
      const name = e.target.name;
      return { ...oldData, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
    };

    props.onAddTodo(todo, newTodo);
    setTodo({
      title: "",
      desc: "",
    });
  };

  return (
    <div>
      <h1 className="title">Collect Data from a Form</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              id="desc"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="field-group">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewTodo.propTypes = {
  onHandleAddTodo: PropTypes.func,
};

export default NewTodo;
