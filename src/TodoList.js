import React, { useState } from "react";
import "./styles.css";
function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  return (
    <>
      <div className="container">
        <div className="header"> TODO LIST </div>
        <input
          type="text"
          placeholder="Add Todo"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}> ADD </button>
      </div>
    </>
  );
}

export default TodoList;
