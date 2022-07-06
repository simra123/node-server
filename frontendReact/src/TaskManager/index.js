import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
export const URL = "http://localhost:5000/api/v1";

const Todo = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [addTask, setAddTask] = useState("");
  const [success, setSuccess] = useState(false);
  const [success2, setSuccess2] = useState(false);
  //url

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`${URL}/tasks`);
        const { data } = res;
        setAllTasks(data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, [allTasks]);

  const postTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${URL}/tasks`,
        {
          name: addTask,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAddTask("");
      setSuccess2(true);
      setTimeout(() => {
        setSuccess2(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = (id) => {
    try {
      axios.delete(`${URL}/tasks/${id}`);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-div all-tasks">
      <div className="alerts">
        {success ? (
          <p className="text-light bg-danger p-2 mt-3">
            {" "}
            deleted successfully!
          </p>
        ) : null}
        {success2 ? (
          <p className="text-light bg-success p-2 mt-3">
            Task Added Successfully!
          </p>
        ) : null}
      </div>

      <div className="center-div">
        <h1>ToDo list</h1>
        <form onSubmit={postTask}>
          <input
            type="text"
            onChange={(e) => {
              setAddTask(e.target.value);
            }}
            value={addTask}
            placeholder="add item..."
          />
          <Button type="submit" variant="dark">
            {" "}
            +{" "}
          </Button>
        </form>
        <ol>
          {allTasks.length > 0
            ? allTasks.map((val, index) => {
                return (
                  <div className="todocomp" key={index}>
                    <input type="checkbox" checked={val.completed} />
                    <p
                      style={{
                        textDecoration: val.completed ? "line-through" : "none",
                      }}
                    >
                      {" "}
                      {val.name}{" "}
                    </p>
                    <div className="actions">
                      <span onClick={(e) => deleteTask(val._id)}>
                        <AiFillDelete size={23} color="red" />
                      </span>
                      <Link to={`/edit/${val._id}`}>
                        <span>
                          <FaEdit size={23} color="green" />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })
            : "No List Found"}
        </ol>
      </div>
    </div>
  );
};
export default Todo;
